import React, { useContext, useState, useEffect } from 'react';
import './Register.css';
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../main';
import logo from "../images/d1.png";
import app from '../App';
const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [foodPreference, setFoodPreference] = useState("");
  const [allergies, setAllergies] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(0); // Initialize BMI state to 0 for calculation

  const healthGoalOptions = ["Weight Loss", "Weight Gain", "Muscle Gain", "Muscle Loss"];
  const foodOptions = ["Vegetarian", "Non-vegetarian", "Vegan", "Gluten-free", "Other"];
  const genderOptions = ["Male", "Female", "Not to say"];

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

    if (!username || !email || !password || !height || !weight || !foodPreference || !allergies || !healthGoal || !gender) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/user/register",
        { username, email, password, height, weight, foodPreference, allergies, healthGoal, gender, bmi,role: "user"},
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setEmail("");
      setUsername("");
      setPassword("");
      setHeight("");
      setWeight("");
      setFoodPreference("");
      setAllergies("");
      setHealthGoal("");
      setGender("");
      setBmi(0);
    } catch (error) {
      console.error(error); // Log the error to see full details
      toast.error(error.response?.data.message || "Registration failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="register">
      <img src={logo} alt="Diet Plan" className="ll" />
      <h1>Register</h1>
      <p>Please Sign Up!</p>
      <form onSubmit={handleRegistration}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter the username"
          className="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <label>Email:</label>
        <input
          type="email"
          className="email"
          placeholder="Enter the Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter the password"
          className="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        {/* New input fields for height and weight */}
        <label>Height (cm):</label>
        <input
          type="number"
          className="height"
          placeholder="Enter your height in cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        /><br />
        <label>Weight (kg):</label>
        <input
          type="number"
          className="weight"
          placeholder="Enter your weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        /><br />

        {/* Gender select element */}
        <label>Gender:</label>
        <select
          className="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          {genderOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <br />

        {/* Food preference select element */}
        <label>Food Preference:</label>
        <select
          className="food-preference"
          value={foodPreference}
          onChange={(e) => setFoodPreference(e.target.value)}
        >
          <option value="">Select</option>
          {foodOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <br />

        {/* Allergy input field */}
        <label>Allergies (comma-separated):</label>
        <input
          type="text"
          className="allergies"
          placeholder="Enter your allergies"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        /><br />

        {/* Health goal select element */}
        <label>Health Goal:</label>
        <select
          className="health-goal"
          value={healthGoal}
          onChange={(e) => setHealthGoal(e.target.value)}
        >
          <option value="">Select</option>
          {healthGoalOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <br />

        {/* Display BMI */}
        <label>Your BMI: {bmi}</label>
        <input
          type="range"
          min="10"
          max="40"
          value={bmi}
          className="bmi-slider"
          readOnly
        />
        <div>
          <span>10</span> {/* Minimum BMI */}
          <span style={{ marginLeft: 'calc(50% - 20px)' }}>25</span> {/* Normal BMI */}
          <span style={{ float: 'right' }}>40</span> {/* Maximum BMI */}
        </div>
        <br />

        <label><input type="checkbox" className="cb" />I agree to the <span className="term">terms of service</span></label>
        <br />
        <button type="submit" className="btn">Register</button><br />
        <label className='ac'>Already have an account? </label>
        <Link to="/login" className="btn">Sign In</Link>
      </form>
    </div>
  );
};

export default Register;
