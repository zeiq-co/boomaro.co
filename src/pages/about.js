import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Team from "../components/Team";


function about() {
  return (
    <Layout>
      <SEO
        title="Online Accounting Software-GST"
        keywords={[`accoutant`, `acountant app`]}
      />
      <Team />
    </Layout>
  );
}

export default about;
