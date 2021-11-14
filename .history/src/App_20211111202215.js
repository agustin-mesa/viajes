import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tendencias from "./pages/Tendencias";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Tendencias />
      </BrowserRouter>
    </>
  );
};

export default App;
