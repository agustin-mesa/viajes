import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tendencias from "./pages/Tendencias";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Tendencias />
      <Blog />
    </>
  );
};

export default App;
