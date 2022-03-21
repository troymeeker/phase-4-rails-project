import React, { useEffect, useState } from 'react';
import '../css/index.css';
// import { UserContext, UserProvider } from './UserContext';
import Home from './Home';
// import NavBar from './NavBar';
// import NewPost from './NewPost';
// import PostItem from './PostItem';
import UnauthenticatedUserApp from './UnauthenticatedUserApp';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./Layout";
import NavBar from "./NavBar";
import NewPost from './NewPost';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [authChecked, setAuthChecked] = useState(false);


  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user)
          setAuthChecked(true)
          
        })
       } else {
         setAuthChecked(true)
       }
    })
  }, [])



  if (!authChecked) { return <div>test</div> }
    return (     
      currentUser ? (
          <div >
           
           <Router>
             <NavBar/>
             <Routes>
              <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="/layout" element={<Layout />}/>
              <Route path="/new" element={<NewPost />}/>
              
            </Routes>
            

            </Router>
          </div>
        ) : (
        <UnauthenticatedUserApp setCurrentUser={setCurrentUser}/>
        )
   
      
      )
    }

export default App;
