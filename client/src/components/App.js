import React from 'react';
import '../css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';



const App = () => {
  return (
    //  <Home/>
    //  <Navbar/>
    <Router>
        <Navbar/>

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

  
   
 
  );
}

export default App;
