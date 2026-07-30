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
