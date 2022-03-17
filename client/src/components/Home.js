import React, {useState, useEffect} from "react";
import NewPost from "./NewPost";
import PostItem from "./PostItem";
import NavBar from "./NavBar";


// import Login from "./Login";
// import Signup from "./Signup";

function Home({ currentUser, setCurrentUser}){

  const [posts, setPosts] = useState([]);

  // const {currentUser, setCurrentUser} = useContext(UserContext);
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
    
    function handleFavorite(favoritedPost){

      const favoritedPosts = posts.map((postObj) => {
        if(postObj.id === favoritedPost.id){
          return favoritedPost
        } else {
          return postObj
        }

      })
      setPosts(favoritedPosts)
    }

    return (
        <div className="authpage">
         
          <NavBar handleLogout={handleLogout}  currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          <h2>Welcome user!</h2> 
                       
            <NewPost onPostAdd={handlePostAdd} /> 
            { posts.map((post) => (
              <PostItem 
                key={post.id}
                post={post}
                onItemDelete={handlePostDelete}
                onEditItem={handleEditPost}
                setPosts={setPosts}
                onFavorite={handleFavorite}
              />
             ))}
          
        </div>
    )
}


export default Home;