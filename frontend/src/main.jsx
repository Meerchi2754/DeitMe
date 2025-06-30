import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react';
export const Context=createContext({
  isAuthenticated:false,
});

const AppWrapper=()=>{
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [user,setUser]=useState({});
  return(
    <Context.Provider
    value={{isAuthenticated,setIsAuthenticated,user,setUser,}}>
      <App/>
    </Context.Provider>
  );
};
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
}
