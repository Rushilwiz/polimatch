import React from "react";
import { Link } from "react-router-dom";
import "./assets/About.scss";

const About = (props) => {
  return (
    <>
      <h1>About page.</h1>
      <Link to="/">Back</Link>
    </>
  );
};

export default About;
