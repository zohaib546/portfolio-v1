// import { GoogleGenAI } from "@google/genai";
// import { NextResponse } from "next/server";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// // System prompt containing your personal background
// const SYSTEM_PROMPT = `
// You are an AI assistant for Zohaib's portfolio website.
// Answer questions accurately based on this context. Be professional and concise.

// Resume/Portfolio Details:
// - Role: Frontend Developer / Full Stack Developer
// - Skills: React, Next.js, TypeScript, Tailwind CSS, Node.js
// - Experience: 2+ years building web applications.
// - Projects: Portfolio site, E-commerce app, Real-time chat dashboard.
// - Education: BS in Computer Science.
// - Availability: Open to full-time remote roles and hybrid opportunities.
// `;

// export async function POST(req: Request) {
//   try {
//     const { prompt } = await req.json();

//     if (!prompt) {
//       return NextResponse.json(
//         { error: "Prompt is required" },
//         { status: 400 },
//       );
//     }

//     // gemini-2.5-flash is free and optimal for portfolio chat
//     const response = await ai.models.generateContent({
//       model: "gemini-3.8-flash",
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${prompt}` }],
//         },
//       ],
//     });
//     console.log({ response });

//     return NextResponse.json({ response: response.text });
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return NextResponse.json(
//       { error: "Failed to generate response" },
//       { status: 500 },
//     );
//   }
// }

import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are an AI assistant for Zohaib's portfolio website. 
Answer questions accurately based on this context. Be professional and concise.

Resume/Portfolio Details:
- Role: Frontend Developer / Full Stack Developer
- Skills: React, Next.js, TypeScript, Tailwind CSS, Node.js
- Experience: 2+ years building web applications.
- Projects: Portfolio site, E-commerce app, Real-time chat dashboard.
- Education: BS in Computer Science.
- Availability: Open to full-time remote roles and hybrid opportunities.
`;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Initialize stream via the Interactions API
    const stream = await client.interactions.create({
      model: "gemini-3.8-flash",
      input: `${SYSTEM_PROMPT}\n\nUser Question: ${prompt}`,
      stream: true,
    });

    const encoder = new TextEncoder();

    // ReadableStream piping text deltas from interaction events
    const webStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            // Filter for step.delta events containing text output
            if (
              event.event_type === "step.delta" &&
              event.delta?.type === "text" &&
              event.delta.text
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(webStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Gemini Interactions API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
