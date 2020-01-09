import React, { useState } from 'react';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'register-form', name, email, phone }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label className="text-xl mt-8">Name</label>
        <div className="control">
          <input
            className="input my-4 border border-gray-400 is-shadowless w-full h-10"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="text-xl">Phone Number</label>
        <div className="control">
          <input
            className="input my-4 border border-gray-400 is-shadowless w-full h-10"
            name="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
      </div>
      {/* <div data-netlify-recaptcha="true" /> */}
      <button
        className="w-full my-8 lg:mx-0 font-bold rounded-full py-4 px-8 shadow opacity-75 gradient text-white"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
