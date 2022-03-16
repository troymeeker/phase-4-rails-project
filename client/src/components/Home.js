import React, {useState, useEffect} from "react";

import NewPost from "./NewPost";

import PostItem from "./PostItem";
// import FavoritesList from "./FavoritesList";

// import Login from "./Login";
// import Signup from "./Signup";

function Home({currentUser, setCurrentUser}){

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

    function handlePostDelete(id){
        const updatedPosts = posts.filter((post) => post.id !== id)
        setPosts(updatedPosts);
    }

    function handleEditPost(updatedPost){
       const updatedPosts = posts.map((post) => {
           if (post.id === updatedPost.id) {
             return updatedPost;
           }
           else {
               return post;
            }
        });
      setPosts(updatedPosts);
    }

    return (
        <div className="authpage">
                  
          <h2>Welcome {currentUser.username}!</h2> 
          
          <button onClick={handleLogout}>Logout</button>
               
            <NewPost onPostAdd={handlePostAdd} /> 
            { posts.map((post) => (
              <PostItem 
                key={post.id}
                post={post}
                onItemDelete={handlePostDelete}
                onEditItem={handleEditPost}
                setPosts={setPosts}
              />
             ))}
          
        </div>
    )
}


export default Home;