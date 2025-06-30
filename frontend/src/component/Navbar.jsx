// import React from 'react';
// import { Link } from "react-router-dom";
// import logo from "../images/d1.png"; // Adjust the path as needed
// import "../component/Navbar.css";
// import { Context } from "../main";  
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { toast } from 'react-toastify';

// toast.configure();

// const Navbar = () => {
//   const { isAuthenticated } = useContext(Context);
//   const navigate = useNavigate();
//   const handleLogout = async(error) => {
    
//       await axios.get("http://localhost:4000/api/v1/user/logout",{withCredentials:true})
//       .then((res)=>{
//         toast.success(res.data.message);
//         setIsAuthenticated(false);
//       })
//       .catch((err)=>{
//         toast.error(err.response.data.message);
//       });
//     // setIsAuthenticated(false);
//     // Navigate("/login");
//   };
//   const handleLogin = () => {
//     navigate("/login");
//   };  
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//       <Link to="/" className="logo-link">
//           <img src={logo} alt="Diet Plan" className="logo" />
//         </Link>
//         <div className="navbar-links">
//           <Link to="/meal-planner" className="nav-link">Meal Planner</Link>
//           <Link to="/diet-plans" className="nav-link">Diet Plans</Link>
//           {/* <Link to="/calculators" className="nav-link">Calculators</Link> */}
//           <Link to="/articles" className="nav-link">Articles</Link>
//           <Link to="/help" className="nav-link">Help</Link>
//           {/* <Link to="/login" className="nav-link">Login</Link> */}
//         </div>
//         {isAuthenticated ? (<button onClick={handleLogout} className="get3">LOGOUT</button>):(<button className="get2" onClick={handleLogin}>LOGIN</button>)}
        
//         <button className="get1">Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useContext } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { toast } from 'react-toastify';  // Import toast from react-toastify
// import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for toast notifications
// import logo from "../images/d1.png"; 
// import "../component/Navbar.css";
// import { Context } from "../main";

// // Initialize toast once in the component
// // toast.configure();

// const Navbar = () => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context); // Ensure setIsAuthenticated is in context
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true, // Send cookies with the request
//       });
//       toast.success(res.data.message);  // Display success message
//       setIsAuthenticated(false);  // Update context
//       navigate("/login");  // Redirect user to login page
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Logout failed");  // Display error message
//     }
//   };

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="logo-link">
//           <img src={logo} alt="Diet Plan" className="logo" />
//         </Link>
//         <div className="navbar-links">
//           <Link to="/meal-planner" className="nav-link">Meal Planner</Link>
//           <Link to="/diet-plans" className="nav-link">Diet Plans</Link>
//           <Link to="/articles" className="nav-link">Articles</Link>
//           <Link to="/help" className="nav-link">Help</Link>
//         </div>
//         {isAuthenticated ? (
//           <button onClick={handleLogout} className="get3">LOGOUT</button>
//         ) : (
//           <button className="get2" onClick={handleLogin}>LOGIN</button>
//         )}
//         <button className="get1">Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';  // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for toast notifications
import logo from "../images/d1.png"; 
import "../component/Navbar.css";
import { Context } from "../main";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true, // Send cookies with the request
      });
      toast.success(res.data.message);  // Display success message
      setIsAuthenticated(false);  // Update context (assuming you have a method to update the authentication state)
      navigate("/");  // Redirect to the home page after logout
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");  // Display error message
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/meal-planner"); // Redirect to Meal Planner
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Diet Plan" className="logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/meal-planner" className="nav-link">Meal Guide</Link>
          <Link to="/diet-plans" className="nav-link">Diet Plans</Link>
          <Link to="/articles" className="nav-link">Articles</Link>
        </div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="get3">LOGOUT</button>
        ) : (
          <button className="get2" onClick={handleLogin}>LOGIN</button>
        )}
        <button onClick={handleGetStarted} className="get1">Get Started</button>
        
      </div>
    </nav>
  );
};

export default Navbar;
