import React from "react";
import "./Home.css";
import Navbar from '../component/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <h1>Let's Make You 
        <span className="fit"> Fit</span>!!
      </h1>
      <p>Lorem ipsum dolor sit amet consexpedita, odio deleniti blanditiis eveniet saepe esse quia placeat!</p>
      
      <button className="get">GET STARTED FOR FREE &gt;</button>
    </div>
    </>
  );
};

export default Home;
