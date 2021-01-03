import React, { useState } from "react";
import "./assets/Poll.scss";

const CARDS = [
  "Do you believe that fully automatic rifles should be banned?",
  "Do you believe that abortion should be legal?",
  "Do you believe that donald trump is a cool guy?",
  "Do you believe that gay marriage should be legal?",
  "Do you believe that congress should pass the $2000 COVID19 resolution?",
];

const Poll = (props) => {
  const [cardStack, setCardStack] = useState();
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);

  return (
    <div className="poll">
      <div className="container">
        <div className="card-wrapper">
          <div className="card card-top-left">
            <div className="card-inner">
              <h1 className="card-title">{CARDS[0]}</h1>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <input
            type="range"
            className="slider"
            id="weight"
            name="weight"
            min="-5"
            max="5"
            step="0.1"
            value={currentWeight}
            onChange={(e) => {
              setCurrentWeight(e.target.value);
            }}
          />
          <h1 className="labels">
            <span className="left-label">Yes!</span>
            <span className="right-label">No!</span>
          </h1>
        </div>
        <div className="slider-container">
          <input
            type="range"
            className="slider"
            id="weight"
            name="weight"
            min="-5"
            max="5"
            step="0.1"
            value={currentAnswer}
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <h2 className="labels">
            <span className="left-label">I'm pretty indifferent.</span>
            <span className="right-label">This is super important!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Poll;
