import React from "react";
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
          
          <RenderPost />
          
              
        </div>
    )
}

export default Home;