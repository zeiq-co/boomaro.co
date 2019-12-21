import React from "react";

import logo from "../../static/images/boomaro.png";

const Navigation = () => (
  <nav
    id="header"
    className="fixed w-full z-30 top-0 text-white bg-white shadow"
  >
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
        <a
          className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"
          href="#"
        >
          <img src={logo} width="50" height="50" />
        </a>
      </div>

      <div className="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-black font-bold no-underline"
              href="#"
            >
              About
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#"
            >
              Contact us
            </a>
          </li>
        </ul>
        <form action>
          <button
            type="submit"
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white"
          >
            Download
          </button>
        </form>
      </div>
    </div>

    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
);

export default Navigation;
