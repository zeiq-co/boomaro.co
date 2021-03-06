import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
// import catAndHumanIllustration from "../../static/images/cat-and-human-illustration.svg";
import HomeHero from '../components/HomeHero';
import Waves from '../components/Waves';
import Features from '../components/Features';
import TitleCards from '../components/TitleCards';
import PricingCards from '../components/PricingCards';
import ReverseWave from '../components/ReverseWave';
import Action from '../components/Action';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Online Accounting GST Software"
        keywords={[`accountant`, `accountant app`]}
      />
      <HomeHero />
      <Waves />
      <Features />
      <TitleCards />
      <PricingCards />
      <ReverseWave />
      <Action />
    </Layout>
  );
}

export default IndexPage;
