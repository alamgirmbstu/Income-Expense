import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Layout = (props) => {
  useEffect(() => {
    (() => {
      // Now we can use async/awai keyword function calling here
    })();
  }, []);
  return (
    <div>
      <Menu />
      {props.children}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
