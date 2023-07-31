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
      <div className="min-h-[10vh]">
        <Menu />
      </div>
      <div className="min-h-[60vh] flex">{props.children}</div>
      <div className="min-h-[25vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
