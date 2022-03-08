import React from "react";

import NewItem from "./NewItem";
import RenderPost from "./RenderPost";



function Home({ onLogout }){

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE", 
        }).then(() => onLogout());
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h1>mylist</h1>
          <NewItem/> 
          <RenderPost />
          
              
        </div>
    )
}

export default Home;