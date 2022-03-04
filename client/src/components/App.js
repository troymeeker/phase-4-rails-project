import React, { useEffect, useState } from 'react';
import '../css/index.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
// import Signup from './Signup';
import Login from './Login';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  },[]);

  function handleLogin(user){
    setUser(user);
  }

  function handleLogout(){
    setUser(null);
  }

  if (user) {
    return <Home onLogout={handleLogout}/>
  } else {
    return <Login onLogin={handleLogin} /> 
  }
 
}

export default App;
