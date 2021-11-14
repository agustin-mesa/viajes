/* 
---------------------------------------------------
------Mauro Agustín Mesa - Frontend Developer------
 * Librerías usadas:
    # Styled-components
    # React-responsive
---------------------------------------------------
*/

import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tendencias from "./pages/Tendencias";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Tendencias />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
