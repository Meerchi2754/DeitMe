import React, { useContext, useState, useEffect } from 'react';
import './Register.css';
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../main';
import logo from "../images/d1.png";
import WeightLoss from '../component/WeightLoss';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dp, setDp] = useState("");
  const [hg, setHg] = useState("");
  const [activitylevel, setActivitylevel] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(0);
  const [age, setAge] = useState("");
  
  const healthGoalOptions = ["Weight Loss", "Weight Gain", "Muscle Gain","Maintaing Health"];
  const foodOptions = ["Vegetarian", "Non-vegetarian", "Vegan", "Gluten-free", "Other"];
  const genderOptions = ["Male", "Female"];
  const activityOptions =["sedentary", "Light", "Moderate", "Active", "Very Active"];
  const navigateTo = useNavigate();
  
  useEffect(() => {
    if (height && weight) {
      calculateBmi(weight, height);
    }
  }, [height, weight]);
  
  const calculateBmi = (weight, height) => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };
  
  const handleRegistration = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password || !height || !weight || !dp || !activitylevel || !hg || !gender || !age) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/user/register",
        { username, email, password, height, weight, dp, activitylevel, hg, gender, age, bmi, role: "user" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Registration successful");
      setIsAuthenticated(true);
      setTimeout(() => {
        navigateTo("/"); 
      }, 2000);
      setEmail("");
      setUsername("");
      setPassword("");
      setAge("");
      setHeight("");
      setWeight("");
      setDp("");
      setActivitylevel("");
      setHg("");
      setGender("");
      setBmi(0);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data.message || "Registration failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="register">
      <ToastContainer />
      <Link to="/" className="logo-link">
          <img src={logo} alt="Diet Plan" className="ll" />
        </Link>
      <h1>Register</h1>
      <p>Please Sign Up!</p>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            placeholder="Enter your height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            placeholder="Enter your weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Food Preference:</label>
          <select
            value={dp}
            onChange={(e) => setDp(e.target.value)}
          >
            <option value="">Select</option>
            {foodOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Activity Level:</label>
          <select
            value={activitylevel}
            onChange={(e) => setActivitylevel(e.target.value)}
          >
            <option value="">Select</option>
            {activityOptions.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Health Goal:</label>
          <select
            className="health-goal"
            value={hg}
            onChange={(e) => setHg(e.target.value)}
          >
            <option value="">Select</option>
            {healthGoalOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="bmi-display">
          <span>BMI: {bmi}</span>
        </div>

        <button type="submit" className="btn">Register</button>
      </form>
      <p className="ac">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
