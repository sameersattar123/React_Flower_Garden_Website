import React from "react";
import Slider from "../includes/Slider";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Slider />
      <About/>
      <Services/>  
    </div>
  );
};

export default Home;
