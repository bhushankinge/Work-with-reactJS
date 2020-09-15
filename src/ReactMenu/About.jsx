import React from "react";
import AboutImage from "../images/About-image.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={AboutImage}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
