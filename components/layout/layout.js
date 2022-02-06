import React, { Fragment } from "react";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
