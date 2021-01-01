import React from "react";
import { Link } from "react-router-dom";
import "./assets/Landing.scss";

const Landing = (props) => {
  return (
    <div className="landing">
      <div className="landing-section">
        <h1>
          Poli<i className="bi bi-heart-fill"></i>Match
        </h1>
        <p>Bringing you one step closer to your representatives.</p>
        <button
          onClick={() => {
            props.setShowTutorial(true);
          }}
        >
          Let's get started.
        </button>
        <Link to="/about">
          <button>About Polimatch</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
