import React from "react";
import NotFoundPage from "./Pages/NotFoundPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </HashRouter> 
    </div>
  );
};

export default App;
