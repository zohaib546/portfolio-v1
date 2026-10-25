"use client";
import FormGroup from "@/components/form-group/";
import Button from "@/components/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  return (
    <section id="contact" className="flex flex-col gap-5 p-0">
      <div className="grid grid-cols-2">
        <div className="border-divider flex flex-col gap-5 border-r px-[40px] py-[60px]">
          <div>
            <p className="subtitle">Send me a message</p>
            <h3>Let&apos;s Work Together</h3>
          </div>
          <form className="flex flex-col gap-[28px]">
            <FormGroup
              required={true}
              type="text"
              id="name"
              name="name"
              autocomplete="off"
              placeholder="Your name *"
              onChange={(e) => {}}
            />
            <FormGroup
              required={true}
              type="email"
              id="email"
              name="email"
              autocomplete="off"
              placeholder="Email address *"
              onChange={(e) => {}}
            />
            <FormGroup
              required={true}
              type="text"
              id="subject"
              name="subject"
              autocomplete="off"
              placeholder="Subject *"
              onChange={(e) => {}}
            />
            <FormGroup
              label="Message"
              required={true}
              type="textarea"
              id="message"
              name="message"
              autocomplete="off"
              placeholder="Tell me more about your project or inquiry..."
              onChange={(e) => {}}
            />
            <div className="flex justify-end">
              <Button variant="primary">Send Message</Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center gap-[28px] self-stretch py-[60px] pr-[30px] pl-[40px]">
          <div className="rounded-lg border border-[rgba(107,191,133,0.2)] bg-linear-[135deg,rgba(107,191,133,0.1),rgba(82,168,114,0.05)] p-4">
            <p className="subtitle mb-1">Why Reach Out?</p>
            <h4 className="font-outfit text-description text-sm">
              Discuss projects, contracts, or consulting opportunities
            </h4>
          </div>
          <div className="rounded-lg border border-[rgba(107,191,133,0.2)] bg-linear-[135deg,rgba(107,191,133,0.1),rgba(82,168,114,0.05)] p-4">
            <p className="subtitle mb-1">Quick Setup</p>
            <h4 className="font-outfit text-description text-sm">
              From brief to delivery in optimized timelines
            </h4>
          </div>
          <div className="rounded-lg border border-[rgba(107,191,133,0.2)] bg-linear-[135deg,rgba(107,191,133,0.1),rgba(82,168,114,0.05)] p-4">
            <p className="subtitle mb-1">Expertise</p>
            <h4 className="font-outfit text-description text-sm">
              5+ years in production React & full-stack work
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
