import React from "react";

import heroImg from "../../static/images/MacBook-Pro-mockup.png";
import windowLogo from "../../static/images/window-button.png";
import macLogo from "../../static/images/mac-button.png";

const HomeHero = () => (
  <div className="pt-24">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full"></p>
        <h1 className="my-4 text-4xl font-bold leading-tight self-center">
          Boomaro Accounting App
        </h1>
        <p className="leading-normal text-2xl mb-8 self-center">
          A simplified tool for Accountants available on
        </p>

        <div className="flex flex-row w-full justify-center">
          <a href="/">
            <img className="w-48 mr-4 z-50" src={windowLogo} />
          </a>
          <a href="/">
            <img className="w-48 z-50" src={macLogo} />
          </a>
        </div>
      </div>

      <div className="w-full md:w-3/5 py-6 text-center">
        <img className="w-full z-50" src={heroImg} />
      </div>
    </div>
  </div>
);

export default HomeHero;
