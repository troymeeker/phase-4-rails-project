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

  if (user) {
    return <Home/>
  } else {
    return <Login onLogin={setUser} /> 
  }
 
}

export default App;
