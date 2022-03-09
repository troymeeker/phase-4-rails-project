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

    function handlePostAdd(post){
        fetch('/posts', {
            method: "POST", 
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then((resp) => resp.json())
        .then((post) => {
             setPosts([...posts, post])
        })
      }

    return (
        <div className="authpage">
           <Navbar 
            currentUser={currentUser}
            handleLogout={handleLogout}
           />
          <NewPost handlePostAdd={handlePostAdd}/> 
          <RenderPost posts={posts} setPosts={setPosts}/>
              
        </div>
    )
}


export default AuthenticatedUserApp;