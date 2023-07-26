import React from "react";
import Menu from "../components/Menu";

const NotFoundPage = () => {
  return (
    <div>
        <Menu/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="../../images/notFoundPage.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Page Not Found !</h1>
            <p className="py-6">
              You didn't break the internet, but we can't find what you are
              looking for.
            </p>
            {/*<button className="btn btn-primary">Get Started</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
