import React, { useEffect, useState } from 'react';
import Navbar from "../component/Navbar";
import axios from 'axios';
import { toast } from 'react-toastify';
import MuscleGain from '../component/MuscleGain';
import MaintaingHealth from '../component/MaintaingHealth';
import WeightGain from '../component/WeightGain';
import WeightLoss from '../component/WeightLoss';

const DietPlans = () => {
  const [hg, setHg] = useState("");

  useEffect(() => {
   
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/userdata", {
          withCredentials: true,
        });
        setHg(data.user.hg); // Adjusted to access hg inside user object
      } catch (error) {
        toast.error("Failed to fetch user data");
      }
    };
    fetchUserData();
  }, []);

  // Render specific component based on health goal
  const renderDietPlan = () => {
    switch (hg) {
      case "Weight Loss":
        return <WeightLoss />;
      case "Weight Gain":
        return <WeightGain />;
      case "Muscle Gain":
        return <MuscleGain />;
      case "Maintaing Health":
        return <MaintaingHealth/>;
      default:
        return <p>Select a health goal from the Register page.</p>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="diet-plans">
        <h1>Your Diet Plan</h1>
        {renderDietPlan()}
      </div>
    </>
  );
};

export default DietPlans;
