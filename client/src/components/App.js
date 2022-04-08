import React, { useEffect, useState } from 'react';
import '../css/index.css';
import Home from './Home';
import UnauthenticatedUserApp from './UnauthenticatedUserApp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import NavBar from "./NavBar";
import NewPost from './NewPost';
// import FavoritesList from './FavoritesList';


function App() {
  const [posts, setPosts] = useState([]);
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

  function handlePostAdd(post){

    fetch("/posts", {
        method: "POST", 
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    
    .then((resp) => resp.json())
    .then((post) => {
         setPosts([...posts,post])
    })
  }




if (!authChecked) { return <div>test</div> }
    return (     
      currentUser ? (
          <div >
           
           <Router>
             
              <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              <Routes>
               
                <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/new" element={<NewPost onPostAdd={handlePostAdd}/>}/>
                
              </Routes>
            </Router>
          </div>
        ) : (
          <UnauthenticatedUserApp setCurrentUser={setCurrentUser}/>
        )    
      )
    }

export default App;
