import React from "react";

import PropTypes from "prop-types";

import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <Navigation />
        {children}
      <Footer />
    </body>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
