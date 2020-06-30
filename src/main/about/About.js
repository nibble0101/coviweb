import React from "react";
import * as aboutData from "./about.json";
import Image from "./Image";
import Section from "./Section";
import Zoom from "react-reveal/Zoom";
const { image, sections } = aboutData.about;
function About(props) {
  return (
    <Zoom>
      <div className="about-section">
        <Image image={image} />
        <Section sections={sections} />
      </div>
    </Zoom>
  );
}

export default About;