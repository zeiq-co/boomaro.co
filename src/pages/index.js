import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../../static/images/cat-and-human-illustration.svg";
import Navigation from "../components/Navigation";
import HomeHero from "../components/HomeHero";
import Waves from "../components/Waves";
import Features from "../components/Features";
import TitleCards from "../components/TitleCards";
import PricingCards from "../components/PricingCards";
import ReverseWave from "../components/ReverseWave";
import Action from "../components/Action";
import Footer from "../components/Footer";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="GatsbyJS Tailwind Starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Navigation />
      <HomeHero />
      <Waves />
      <Features />
      <TitleCards />
      <PricingCards />
      <ReverseWave />
      <Action />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
