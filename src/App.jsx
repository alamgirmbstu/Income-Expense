import React from "react";
import Menu from "./components/Menu";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return (
    <div>      
      <Menu/>
      <h1>This is APP page</h1>
      <NotFoundPage/>
    </div>
  );
};

export default App;
