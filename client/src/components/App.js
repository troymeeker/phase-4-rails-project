import React, { useEffect, useState } from 'react';
import '../css/index.css';

import AuthenticatedUserApp from './AuthenticatedUserApp';
import UnauthenticatedUserApp from './UnauthenticatedUserApp';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

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
