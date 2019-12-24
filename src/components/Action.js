import React from "react";

const Action = () => (
  <section className="container mx-auto text-center py-6 mb-12">
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
      Download now for a free trial
    </h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <h3 className="my-4 text-3xl leading-tight">
      Manage your finances wherever you go, with the Boomaro App.
    </h3>

    <form action>
      <button
        type="submit"
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      >
        Download!
      </button>
    </form>
  </section>
);

export default Action;