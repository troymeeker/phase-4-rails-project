import React from "react";
import Categories from "./Categories";
import NewItem from "./NewItem";



function Home(){
    return (
        <div>
            <h1>mylist</h1>
          <NewItem/> 
          <Categories/>
              
        </div>
    )
}

export default Home;