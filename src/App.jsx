import React from "react";
import NotFoundPage from "./Pages/NotFoundPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SamplePage from './Pages/SamplePage';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/SamplePage" element={<SamplePage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </HashRouter> 
    </div>
  );
};

export default App;
