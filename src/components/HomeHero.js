import React from "react";

import heroImg from "../../static/images/hero.png";

const HomeHero = () => (
  <div className="pt-24">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full">Open-Source project</p>
        <h1 className="my-4 text-5xl font-bold leading-tight">
          GatsbyJS Tailwind Starter
        </h1>
        <p className="leading-normal text-2xl mb-8">
          - a simple landing page styled with{" "}
          <a
            className="text-gray-800 font-bold underline"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>{" "}
          and generated by{" "}
          <a
            className="text-gray-800 font-bold underline"
            href="https://www.gatsbyjs.org/"
          >
            GatsbyJS
          </a>
        </p>

        <form action>
          <button
            type="submit"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            Get Sources
          </button>
        </form>
      </div>

      <div className="w-full md:w-3/5 py-6 text-center">
        <img className="w-full md:w-4/5 z-50" src={heroImg} />
      </div>
    </div>
  </div>
);

export default HomeHero;
