import ScrollCue from "@/components/scroll-cue";
import { Fragment, ReactNode } from "react";

interface IHomeMain {
  children: ReactNode;
}

const HomeMain = ({ children }: IHomeMain) => {
  return (
    <Fragment>
      <main className="home__main">{children}</main>
      <div className="overlay-element" aria-hidden="true"></div>
      <ScrollCue />
    </Fragment>
  );
};

export default HomeMain;
