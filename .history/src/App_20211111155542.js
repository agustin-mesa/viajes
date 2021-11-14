import React from "react";
import { Router } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
};

export default App;
