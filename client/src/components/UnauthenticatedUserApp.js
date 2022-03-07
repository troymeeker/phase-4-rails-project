import React from "react";

import Login from "./Login"
import Signup from "./Signup";

function UnauthenticatedUserApp({setCurrentUser}){
    return (
        <div className="unauthpage">
            <h2>Login or Signup Here</h2>
       
              <Login setCurrentUser={setCurrentUser}/>
              <Signup setCurrentUser={setCurrentUser}/>
               
               
         
        </div>
    )
}

export default UnauthenticatedUserApp;