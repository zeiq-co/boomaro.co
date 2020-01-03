import React from 'react';

import Layout from '../components/Layout';
import RegisterForm from '../components/RegisterForm';

// const registerMutation = gql`
//   mutation register($input: RegisterInput) {
//     register(input: $input) {
//       jwt
//       user {
//         id
//         email
//       }
//     }
//   }
// `;

export default class Register extends React.Component {
  onRegisterSuccess = async (cache, { data: { register } }) => {
    await window.localStorage.setItem('token', register.jwt);
    window.location.replace('/');
  };

  render() {
    return (
      <Layout>
        <div className='flex justify-center bg-white text-black'>
          <div className='w-1/3'>
            <div className='flex justify-center'>
              <h1 className='text-5xl'>Register Yourself</h1>
            </div>
            <div className='my-20'>
              <RegisterForm />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
