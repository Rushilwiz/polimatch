import React, { useState } from "react";
import "./assets/Main.scss";
import Tutorial from "./Tutorial";
import Landing from "./Landing";
import Poll from "./Poll";

const Main = (props) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [finishTutorial, setFinishTutorial] = useState(false);

  return (
    <div className="main">
      {finishTutorial ? (
        <Poll />
      ) : showTutorial ? (
        <Tutorial
          setShowTutorial={setShowTutorial}
          setFinishTutorial={setFinishTutorial}
        />
      ) : (
        <Landing setShowTutorial={setShowTutorial} />
      )}
    </div>
  );
};

export default Main;
