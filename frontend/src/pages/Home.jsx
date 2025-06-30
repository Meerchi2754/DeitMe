import React from "react";
import "./Home.css";
import Navbar from '../component/Navbar';
import Footer from '../component/footer';

const handleGetStarted = () => {
  <Link to="/meal-planner" className="nav-link"></Link>
  navigate("/meal-planner"); 
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <h1>Let's Make You 
        <span className="fit"> Fit !!</span>
      </h1>
      <p>Change your space. Change your Look. Change your confidence!</p>
      <button onClick={handleGetStarted} className="get">GET STARTED FOR FREE  &gt;</button>
    </div>
    <section className="hero-container"><div className="hero-content">
        <h1>Healthy Choices, Brighter Futures</h1>
        <p>
          At DietMe, we're on a mission to transform the way you approach 
          nutrition and well-being. Our innovative platform combines the power 
          of advanced Artificial Intelligence with the wisdom of expert 
          dietitians, creating a personalized and holistic approach to healthy living.
        </p>
      </div>
      <div className="hero-image">
        <img src="/dd2.png" alt="Healthy Eating" />
      </div></section>
      <br></br>
      <br/>
      <br/>
      <Footer/>
    </>
  );
};

export default Home;
