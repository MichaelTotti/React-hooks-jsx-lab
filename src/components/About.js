import React from "react";
import { name, image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>My name is {name} and I am a web developer.</p>
    <img src={image} alt="I made this" />
    About
  </div>
  );
}

export default About;
