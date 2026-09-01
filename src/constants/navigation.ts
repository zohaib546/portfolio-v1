interface ILink {
  route: string;
  name: string;
}

export const NAVLINKS: ILink[] = [
  {
    route: "/work",
    name: "Work",
  },
  {
    route: "#stack",
    name: "Stack",
  },
  {
    route: "#experience",
    name: "Experience",
  },
  {
    route: "#contact",
    name: "Contact",
  },
];

export const FOOTER_NAV_LINKS: ILink[] = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/work",
    name: "Work",
  },
  {
    route: "#stack",
    name: "Stack",
  },
  {
    route: "#experience",
    name: "Experience",
  },
  {
    route: "#contact",
    name: "Contact",
  },
];

interface ISocialLink extends ILink {
  title: string;
  type: "email" | "linkedin" | "github" | "phone";
}

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    route: "mailto:zohaibashraf546@gmail.com",
    name: "Email",
    title: "zohaibashraf546@gmail.com",
    type: "email",
  },
  {
    route: "tel:+923324131649",
    name: "Phone",
    title: "tel:+923324131649",
    type: "phone",
  },
  {
    route: "https://github.com/zohaib546",
    name: "Github",
    title: "github.com/zohaib546",
    type: "github",
  },
  {
    route: "https://www.linkedin.com/in/zohaibashraf546",
    name: "LinkedIn",
    title: "linkedin.com/in/zohaibashraf546",
    type: "linkedin",
  },
];
