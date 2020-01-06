import React from 'react';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', phone: '' };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'register', ...this.state })
    })
      .then(() => {
        this.setState({
          name: '',
          email: '',
          phone: ''
        });
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <form
        name='register-form'
        data-netlify='true'
        onSubmit={this.handleSubmit}
      >
        <div className=''>
          <label className='text-xl mt-8'>Name</label>
          <div className='control'>
            <input
              className='input my-4 border border-gray-400 is-shadowless w-full h-10'
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='field'>
          <label className='text-xl'>Your email</label>
          <div className='control'>
            <input
              className='input my-4 border border-gray-400 is-shadowless w-full h-10'
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label className='text-xl'>Phone Number</label>
          <div className='control'>
            <input
              className='input my-4 border border-gray-400 is-shadowless w-full h-10'
              type='number'
              name='phone'
              value={phone}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button
          className='w-full my-8 lg:mx-0 hover:underline font-bold rounded-full py-4 px-8 shadow opacity-75 gradient text-white'
          type='submit'
        >
          Register
        </button>
      </form>
    );
  }
}

export default RegisterForm;
