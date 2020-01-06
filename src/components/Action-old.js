import React from "react";
import windowLogo from "../../static/images/window-button.png";
import macLogo from "../../static/images/mac-button.png";

const Action = () => (
  <section className="container mx-auto text-center py-6 mb-12" id="download">
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
      Download now for a free trial
    </h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <h3 className="my-4 text-3xl leading-tight">
      Manage your finances wherever you go, with the Boomaro App.
    </h3>

    <div className="flex flex-row w-full justify-center">
          <a href="/">
            <img className="w-48 mr-4 z-50" src={windowLogo} />
          </a>
          <a href="/">
            <img className="w-48 z-50" src={macLogo} />
          </a>
        </div>

    {/* <form action>
      <button
        type="submit"
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      >
        Download!
      </button>
    </form> */}
  </section>
);

export default Action;
