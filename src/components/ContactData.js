import React from "react";

import contactxp from "../../static/images/contactxp.svg";

const ContactData = () => (
  <div className="pt-48 pb-24 bg-white">
    <div className="container px-20 mx-auto flex flex-wrap flex-col md:flex-row ">
      <div className="flex flex-col w-full md:w-3/6  items-start md:text-left">
        <h1 className="my-4 text-5xl font-bold leading-tight text-gray-800 ">
          Contact Us
        </h1>

        <p className="leading-normal text-xl mb-8 text-gray-800">
          We’re as accessible as your good neighbour. Feel freeto give us a
          shout.
        </p>
        <p className="leading-normal text-xl mb-8 text-gray-800">
          <span className="icon">📍</span> Punjab, India
        </p>
        <p className="leading-normal text-xl mb-8 text-gray-800">
          <span className="icon">📧</span>
          <a href="boomaro.com"> boomaro.co</a>
        </p>
        <p className="leading-normal text-xl mb-8 text-gray-800">
          <span className="icon">☎️</span>
          <a href="+91-181-5195423"> +91-181-5195423</a>
        </p>
      </div>
      <div className="w-full md:w-3/6 text-center">
        <img className="w-full z-50 h-50" src={contactxp} />
      </div>
    </div>
  </div>
);
export default ContactData;
