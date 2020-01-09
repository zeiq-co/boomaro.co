import React from 'react';

import Layout from '../components/Layout';
import RegisterForm from '../components/RegisterForm';
import HomeHero from '../components/HomeHero';
import SEO from '../components/Seo';

const SignUp = () => {
  return (
    <Layout>
      <SEO
        title="Sign up for Boomaro Online Accounting Software"
        keywords={[`accountant`, `accountant app`]}
      />
      <div className="flex justify-center bg-white text-black">
        <div className="w-1/3">
          <div className="text-center justify-center">
            <h1 className="text-5xl">Signup for Boomaro</h1>
            <p>Fully Offline Accounting Software and Free to use!</p>
          </div>
          <div className="my-20">
            <RegisterForm />
            <HomeHero />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
