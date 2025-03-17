import React from "react";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Customer from "./component/Customer";
import Studio from "./component/Studio";
import Revenue from "./component/Revenue";
import Footer from "./component/Footer";
import Data from "./component/Data";
import Article from "./component/Article";
import Join from "./component/Join";
import SignUp from "./component/SignUp";
import ExperienceWelcome from "./component/ExperienceWelcome";
import Trust from "./component/Trust";
import Works from "./component/Works";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Experience />
      <Customer />
      <Studio />
      <Revenue />
      <Works />
      <Data />
      <Trust />
      {/* <Oppernuties /> */}
      <Article />
      <Join />
      <SignUp />
      <ExperienceWelcome />
      <Footer />
    </div>
  );
};

export default App;
