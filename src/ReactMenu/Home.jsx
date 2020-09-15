import React from "react";
import "./home.css";
import homeimage from "../images/home-work.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={homeimage}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
