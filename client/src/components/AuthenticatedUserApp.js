import React, {useState, useEffect} from "react";
// import { UserContext } from "./UserContext.js"
import NewPost from "./NewPost";
import Navbar from "./Navbar"
import PostItem from "./PostItem";

function AuthenticatedUserApp({currentUser, setCurrentUser}){

// const post = useContext(UserContext);
//   const [item_name, setItemName] = useState("")

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
         
          <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
          
          {/* <UserContext.Provider value={item:[item_name, set] }> */}
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
          {/* </UserContext.Provider> */}
        </div>
    )
}


export default AuthenticatedUserApp;