import React from 'react';

import Layout from '../components/Layout';
import ContactData from '../components/ContactData';
import SEO from '../components/Seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact us" />
    <ContactData />
  </Layout>
);

export default Contact;
