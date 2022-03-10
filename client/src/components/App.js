import React, { useEffect, useState } from 'react';
import '../css/index.css';

import AuthenticatedUserApp from './AuthenticatedUserApp';
import UnauthenticatedUserApp from './UnauthenticatedUserApp';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
//   const [posts, setPosts] = useState([])
  
 

//   useEffect(() => {
//     fetch('/posts')
//     .then((resp) => resp.json())
//     .then((posts) => setPosts(posts))
// }, [])

// function handlePostAdd(post){
//   fetch('/posts', {
//       method: "POST", 
//       headers: {
//          "Content-Type": "application/json"
//       },
//       body: JSON.stringify(post)
//   })
//   .then((resp) => resp.json())
//   .then((post) => {
//        setPosts([...posts, post])
//   })

// }

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



  if (!authChecked) { return <div></div>}
    return (     
      currentUser ? (
        <AuthenticatedUserApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}        
        />
      ) : (
        <UnauthenticatedUserApp
          setCurrentUser={setCurrentUser}
        />
      )
    )
  }

export default App;
