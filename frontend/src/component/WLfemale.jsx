import React from "react";
import "./WLfemale.css";

const WLfemale = () => {
  const sections = [
    {
      title: "Weight Loss Tips for Female",
      description:
        "Achieve your Body goals with these essential tips. Follow a structured plan tailored to your body’s needs and achieve your fitness aspirations!",
      content: [
        "Get enough sleep",
        "Drink high-calorie beverages:",
        "Make small, achievable changes",
        "Eat mindfully",
        "Engage in regular physical activity and exercise",
        "Cut Down on Refined Carbs"
      ],
      image: "hero2.jpg",
      alt: "Muscle Gain Illustration",
    },
    {
      title: "Breakfast Needed to Loss Weight",
      description:
        "A breakfast that's high in protein and fiber can help you lose weight by making you feel full and eating fewer calories later in the day   ",
      content: ["Eggs", "Oatmeal","Berries","Bananas"],
      image: "pr6.jpeg",
      alt: "Protein Sources",
    },
    {
      title: "Lunch Needed to Loss Weight",
      description:
        "",
      content: ["Palak paneer","Mixed bean salad","Salad","Vegetable Raita","Chapatis","Brown rice "],
      image: "pr2.png",
      alt: "Carbs and Fat Sources",
    }, {
        title: "Dinner Needed to Loss Weight",
        description:
          "",
        content: ["Vegetable pulao","Salad","Vegetable Soup","Chapatis","Grilled fish tikka"],
        image: "pr9.jpeg",
        alt: "Carbs and Fat Sources",
      }
  ];

  return (
    <>
      <h1 className="mg-male-title">Weight Loss Tips for Females</h1>
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

export default WLfemale;
