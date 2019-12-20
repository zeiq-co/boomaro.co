import React from "react";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      {children}
    </body>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
