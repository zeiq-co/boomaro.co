import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Team from "../components/Team";
import PageLayout from '../components/PageLayout'


function about() {
  return (
    <Layout>
      <SEO
        title="Online Accounting Software-GST"
        keywords={[`accoutant`, `acountant app`]}
      />
      <PageLayout/>
      <Team />
    </Layout>
  );
}

export default about;
