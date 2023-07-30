import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const layout = (props) => {
  useEffect(() => {
    (() => {
      // No we can use async/awai keyword function calling here
    })();
  }, []);
  return (
    <div>
      <div>
        <div className="navbar fixed z-50 top-0  shadow bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                ></svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2"
              >
                <li>
                <NavLink to="/SamplePage" className={({isActive})=>isActive?"active-item":""}>Sample Page</NavLink>

                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-item" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/SamplePage"
                  className={({ isActive }) => (isActive ? "active-item" : "")}
                >
                  Sample Page
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default layout;
