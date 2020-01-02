import React from "react";

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "register", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        className="register-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <div className="">
          <label className="text-xl mt-8">Name</label>
          <div className="control">
            <input
              className="input border border-gray-400 is-shadowless w-full h-10"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="text-xl">Your email</label>
          <div className="control">
            <input
              className="input border border-gray-400 is-shadowless w-full h-10"
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="">
          <label className="text-xl">Password</label>
          <div className="control">
            <input
              className="input border border-gray-400 is-shadowless w-full h-10"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button
          className="w-full my-8 lg:mx-0 hover:underline font-bold rounded-full py-4 px-8 shadow opacity-75 gradient text-white"
          type="submit"
        >
          Register
        </button>
      </form>
    );
  }
}

export default RegisterForm;
