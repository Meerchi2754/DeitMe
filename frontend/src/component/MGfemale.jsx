import React from "react";
import "./MGfemale.css";

const MGfemale = () => {
  const sections = [
    {
      title: "Muscle Gain Tips",
      description:
        "Achieve your muscle-building goals with these essential tips. Follow a structured plan tailored to your body’s needs and achieve your fitness aspirations!",
      content: [
        "Decide your target number of repetitions",
        "Choose the right amount of weight",
        "Choose your exercises well",
        "Structure your workout to avoid overtraining",
      ],
      image: "hero.jpg",
      alt: "Muscle Gain Illustration",
    },
    {
      title: "Protein Needed to Gain Muscle",
      description:
        "Good sources of protein to eat for muscle gain include lean cuts of meat, low fat dairy, fish, eggs, and nuts.",
      content: [],
      image: "protein.jpg",
      alt: "Protein Sources",
    },
    {
      title: "Carbs and Fat Needed to Gain Muscle",
      description:
        "Consuming 0.22–0.68 grams of fat per pound (0.5–1.5 grams per kg) of body weight per day is recommended for muscle gain.",
      content: [],
      image: "pr2.png",
      alt: "Carbs and Fat Sources",
    },
  ];

  return (
    <>
      <h1 className="mg-male-title">Muscle Gain Tips for Males</h1>
      {sections.map((section, index) => (
        <div
          className={`mg-male-section ${index % 2 === 0 ? "" : "reverse"}`}
          key={index}
        >
          <div className="mg-male-image-container">
            <img
              src={section.image}
              alt={section.alt}
              className="mg-male-image"
            />
          </div>
          <div className="mg-male-content">
            <h2 className="mg-male-subtitle">{section.title}</h2>
            <p className="mg-male-description">{section.description}</p>
            {section.content.length > 0 && (
              <ul className="mg-male-tips">
                {section.content.map((tip, tipIndex) => (
                  <li key={tipIndex}>
                    <span className="tip-number">{tipIndex + 1}.</span> {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MGfemale;
