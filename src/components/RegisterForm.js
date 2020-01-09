import React from 'react';

const RegisterForm = () => (
  <form name="register-form" data-netlify="true" method="POST">
    <div className="">
      <label className="text-xl mt-8">Name</label>
      <div className="control">
        <input
          className="input my-4 border border-gray-400 is-shadowless w-full h-10"
          type="text"
          name="name"
        />
      </div>
    </div>
    <div className="field">
      <label className="text-xl">Your email</label>
      <div className="control">
        <input
          className="input my-4 border border-gray-400 is-shadowless w-full h-10"
          type="email"
          name="email"
        />
      </div>
    </div>
    <div>
      <label className="text-xl">Phone Number</label>
      <div className="control">
        <input
          className="input my-4 border border-gray-400 is-shadowless w-full h-10"
          type="number"
          name="phone"
        />
      </div>
    </div>
    {/* <div data-netlify-recaptcha="true" /> */}
    <button
      className="w-full my-8 lg:mx-0 hover:underline font-bold rounded-full py-4 px-8 shadow opacity-75 gradient text-white"
      type="submit"
    >
      Register
    </button>
  </form>
);

export default RegisterForm;
