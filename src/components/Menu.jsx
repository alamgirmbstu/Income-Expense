import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar fixed z-50 top-0  shadow bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="h-5 w-5"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                <g>
                  {" "}
                  <path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2"
          >
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
      <div className="navbar-start hidden lg:flex">
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
  );
};

export default Menu;
