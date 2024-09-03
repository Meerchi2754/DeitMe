  import React from 'react';
  import { BrowserRouter as Router, Routes, Route,Navigate, Link } from 'react-router-dom';
  import './App.css';
  import Home from './pages/Home'; // Adjusted filename to camelCase
  import MealPlanner from './pages/MealPlanner'; // Corrected import paths
  import DietPlans from './pages/DietPlans';
  import Calculators from './pages/Calculators';
  import Articles from './pages/Articles';
  import Help from './pages/Help';
  import Login from './pages/Login';
  import Register from './pages/Register'
  function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/diet-plans" element={<DietPlans />} />
            {/* <Route path="/calculators" element={<Calculators />} /> */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Navigate to="/"></Navigate>} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
