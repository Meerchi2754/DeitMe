import React, { useEffect, useState } from 'react';
import Navbar from "../component/Navbar";
import axios from 'axios';
import { toast } from 'react-toastify';
import WGfemale from '../component/WGfemale';
import WGmale from '../component/WGmale';
import WLfemale from '../component/WLfemale';
import WLmale from '../component/WLmale';
import MGfemale from '../component/MGfemale';
import MGmale from '../component/MGmale';
import MHfemale from '../component/MHfemale';
import MHmale from '../component/MHmale';


const MealPlanner = () => {
  const [hg, setHg] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/userdata", {
          withCredentials: true,
        });
        setHg(data.user.hg); // Adjust based on actual data structure
        setGender(data.user.gender); // Adjust based on actual data structure
      } catch (error) {
        toast.error("Failed to fetch user data");
      }finally {
      setLoading(false); // Set loading to false once data is fetched
    }
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading state while data is being fetched
  }

  // Render specific meal guide component based on health goal and gender
  const renderMealGuide = () => {
    if (hg === "Weight Gain" && gender === "Female") {
      return <WGfemale />;
    } else if (hg === "Weight Gain" && gender === "Male") {
      return <WGmale />;
    } else if (hg === "Weight Loss" && gender === "Female") {
      return <WLfemale />;
    } else if (hg === "Weight Loss" && gender === "Male") {
      return <WLmale />;
    }else if (hg === "Muscle Gain" && gender === "Male") {
      return <MGmale />;
    }else if (hg === "Muscle Gain" && gender === "Female") {
      return <MGfemale />;
    }else if (hg === "Maintaing Health" && gender === "Female") {
      return <MHfemale />;
    }else if (hg === "Maintaing Health" && gender === "Male") {
      return <MHmale />;
    }
    return <p>Select a health goal and gender on the Register page.</p>;
  };

  return (
    <>
      <Navbar />
      <div className="meal-guide">
        <h1>Meal Guide</h1>
        <p></p>
        {renderMealGuide()}
      </div>
    </>
  );
};

export default MealPlanner;
