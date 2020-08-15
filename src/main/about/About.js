import React from "react";
import * as aboutData from "./about.json";
import Image from "./Image";
import Section from "./Section";
import Fade from 'react-reveal/Fade';


const { image, sections } = aboutData.about;
function About(props) {
  return (
    <Fade>
      <div className="about-section">
        <Image image={image} />
        <Section sections={sections} />
      </div>
    </Fade>
  );
}

export default About;
