import React from "react";
import "./WGfemale.css";

const WGfemale = () => {
  const sections = [
    {
      title: "Weight Gain Tips for Female",
      description:
        "Achieve your Body goals with these essential tips. Follow a structured plan tailored to your body’s needs and achieve your fitness aspirations!",
      content: [
        "Eat calorie-dense foods",
        "Drink high-calorie beverages:",
        "Eat a balanced diet",
        "Increase calories",
        "Exercise"
      ],
      image: "hero2.jpg",
      alt: "Muscle Gain Illustration",
    },
    {
      title: "Breakfast Needed to Gain Weight",
      description:
        "The Body should get 45–65% of their calories from carbs,20–35% of their calories from fat and 10–35% of their calories from protein.",
      content: ["2 cucumber potato sandwiches", "handful of nuts","1 cup orange juice","1 glass strawberry shake","vegetable stuffed parathas","Lassi or Mango Shake"],
      image: "pr3.jpg",
      alt: "Protein Sources",
    },
    {
      title: "Lunch Needed to Gain Weight",
      description:
        "",
      content: ["Lentils/chicken or fish curry","Rice","Salad","Vegetable/ Tofu/ Paneer Curry","Chapatis","Dal","Rice"],
      image: "pr2.png",
      alt: "Carbs and Fat Sources",
    }, {
        title: "Dinner Needed to Gain Weight",
        description:
          "",
        content: ["Lentils/chicken or fish curry","Rice","Salad","Vegetable/ Tofu/ Paneer Curry","Chapatis","Dal","Rice"],
        image: "pr4.jpg",
        alt: "Carbs and Fat Sources",
      }
  ];

  return (
    <>
      <h1 className="mg-male-title">Weight Gain Tips for Females</h1>
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

export default WGfemale;
