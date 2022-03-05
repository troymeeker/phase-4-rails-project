import React from "react";

import Login from "./Login"
import Signup from "./Signup";

function UnauthenticatedUserApp({setCurrentUser}){
    return (
        <div>
            <h2>Unauthenticated User App</h2>
       
              <Login setCurrentUser={setCurrentUser}/>
              <Signup setCurrentUser={setCurrentUser}/>
               
               
         
        </div>
    )
}

export default UnauthenticatedUserApp;