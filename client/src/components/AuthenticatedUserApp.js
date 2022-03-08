import React from "react";
import NewPost from "./NewPost";

import Navbar from "./Navbar"
import RenderPost from "./RenderPost";


function AuthenticatedUserApp({currentUser, setCurrentUser, posts, setPosts}){

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
        <div className="authpage">
           <Navbar 
            currentUser={currentUser}
            handleLogout={handleLogout}
           />
          <NewPost /> 
          <RenderPost posts={posts} setPosts={setPosts}/>
              
        </div>
    )
}


export default AuthenticatedUserApp;