import React, {useState, useEffect} from "react";
import NewPost from "./NewPost";
import Navbar from "./Navbar"
import PostItem from "./PostItem";

function AuthenticatedUserApp({currentUser, setCurrentUser}){
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('/posts')
    .then((resp) => resp.json())
    .then((posts) => setPosts(posts))
  }, []);
   

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

    function handlePostAdd(addedPost){
        setPosts((posts) => [...posts, addedPost]);
       
    }
    function handlePostDelete(id){
        const updatedPosts = posts.filter((post) => post.id !== id)
        setPosts(updatedPosts);
    }
    function handleEditPost(updatedPost){
        setPosts((posts) => 
        posts.map((post) => {
            return post.id === updatedPost.id ? updatedPost : post;
        })
        );
    }


    return (
        <div className="authpage">
          <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
          <NewPost onPostAdd={handlePostAdd}/> 
         { posts.map((post) => (
              <PostItem 
                key={post.id}
                post={post}
                onItemDelete={handlePostDelete}
                onEditItem={handleEditPost}
              />
          ))}
          {/* <RenderPost posts={posts} setPosts={setPosts}/> */}
        </div>
    )
}


export default AuthenticatedUserApp;