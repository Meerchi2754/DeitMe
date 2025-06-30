import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MealPlanner from './pages/MealPlanner';
import DietPlans from './pages/DietPlans';
import Articles from './pages/Articles';
import Login from './pages/Login';
import Register from './pages/Register';
import { Context } from './main';  // Import the Context if you're using authentication context
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MaintaingHealth from './component/MaintaingHealth';
import WeightLoss from './component/WeightLoss';
import WeightGain from './component/WeightGain';
import MuscleGain from './component/MuscleGain';
import Detail from './component/Detail';


import WGfemale from './component/WGfemale';
import WGmale from './component/WGmale';
import WLfemale from './component/WLfemale';
import WLmale from './component/WLmale';

// Protected Route component to check if user is authenticated
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <ToastContainer 
        position="top-right"  // Optional: Change the position of Toast
        autoClose={3000}  // Optional: Time before toast auto-closes
      />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/detail" element={<Detail />} />
          
          <Route 
            path="/meal-planner" 
            element={
              <ProtectedRoute>
                <MealPlanner />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/diet-plans" 
            element={
              <ProtectedRoute>
                <DietPlans />
              </ProtectedRoute>
            } 
          />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/weight-gain" element={<WeightGain />} />
          <Route path="/muscle-gain" element={<MuscleGain />} />
          <Route path="/maintence-diet" element={<MaintaingHealth/>} />
          
          <Route path="/weight-lostmale" element={<WLmale />} />
          <Route path="/weight-gainfemale" element={<WGfemale />} />
          <Route path="/weight-gainmale" element={<WGmale/>} />
          <Route path="/weight-lostfemale" element={<WLfemale/>} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
