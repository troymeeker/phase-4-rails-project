import React from "react";
import Categories from "./Categories";
import NewItem from "./NewItem";



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
          <Categories/>
          
              
        </div>
    )
}

export default Home;