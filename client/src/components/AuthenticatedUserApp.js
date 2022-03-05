import React from "react";
import NewItem from "./NewItem";
import Categories from "./Categories";
import Navbar from "./Navbar"


function AuthenticatedUserApp({currentUser, setCurrentUser}){

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE", 
        })
        .then(res => {
            if(res.ok){
              setCurrentUser(null)
            }
        })
    }

    return (
        <div>
           <Navbar 
           currentUser={currentUser}
           handleLogout={handleLogout}
           />
          <NewItem /> 
          <Categories />
              
        </div>
    )
}


export default AuthenticatedUserApp;