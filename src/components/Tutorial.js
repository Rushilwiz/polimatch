import React, { useEffect, useState } from "react";
import "./assets/Tutorial.scss";

const Tutorial = (props) => {
  const slideElements = [
    <div>
      <h1>Welcome to Polimatch!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        aliquam, eveniet assumenda cum vitae laborum delectus magnam quo
        architecto qui quibusdam excepturi laudantium! Dignissimos debitis sunt
        accusantium voluptate recusandae obcaecati? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Laborum neque placeat, cum nobis fuga
        expedita aut rem iste voluptates? Explicabo delectus aliquam officiis
        laboriosam aperiam praesentium magnam hic aut quod?
      </p>
    </div>,
    <div>
      <h1>Slide 2!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        aliquam, eveniet assumenda cum vitae laborum delectus magnam quo
        architecto qui quibusdam excepturi laudantium! Dignissimos debitis sunt
        accusantium voluptate recusandae obcaecati? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Laborum neque placeat, cum nobis fuga
        expedita aut rem iste voluptates? Explicabo delectus aliquam officiis
        laboriosam aperiam praesentium magnam hic aut quod?
      </p>
    </div>,
    <div>
      <h1>Slide 3!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        aliquam, eveniet assumenda cum vitae laborum delectus magnam quo
        architecto qui quibusdam excepturi laudantium! Dignissimos debitis sunt
        accusantium voluptate recusandae obcaecati? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Laborum neque placeat, cum nobis fuga
        expedita aut rem iste voluptates? Explicabo delectus aliquam officiis
        laboriosam aperiam praesentium magnam hic aut quod?
      </p>
    </div>,
    <div>
      <h1>Slide 4!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        aliquam, eveniet assumenda cum vitae laborum delectus magnam quo
        architecto qui quibusdam excepturi laudantium! Dignissimos debitis sunt
        accusantium voluptate recusandae obcaecati? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Laborum neque placeat, cum nobis fuga
        expedita aut rem iste voluptates? Explicabo delectus aliquam officiis
        laboriosam aperiam praesentium magnam hic aut quod?
      </p>
    </div>,
  ];

  const [slides, setSlides] = useState(slideElements);

  const nextSlide = () => {
    setSlides(slides.slice(1));
  };

  const backSlide = () => {
    setSlides(slideElements.slice(slideElements.length - (slides.length + 1)));
  };

  const skipSlides = () => {
    setSlides([]);
  };

  useEffect(() => {
    if (slides.length === 0) {
      props.setShowTutorial(false);
      props.setFinishTutorial(true);
    }
  }, [slides]);

  return (
    <div className="tutorial">
      <button
        onClick={() => {
          props.setShowTutorial(false);
          props.setFinishTutorial(false);
        }}
      >
        Back
      </button>
      <div className="slide">
        {slides[0]}
        <button className="next-slide" onClick={nextSlide}>
          next
        </button>
        <button className="back-slide" onClick={backSlide}>
          back
        </button>
        <button className="skip-slide" onClick={skipSlides}>
          skip
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
