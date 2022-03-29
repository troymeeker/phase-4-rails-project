import React, { useState, useEffect} from "react";
// import NewPost from "./NewPost";
import PostItem from "./PostItem";


function Home({ currentUser, setCurrentUser}){

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('/posts')
    .then((resp) => resp.json())
    .then((posts) => setPosts(posts))
  }, []);
     

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
      setPosts(favoritedPosts);
    }

    return (
        <div className="authpage">
         
         <div className="header">
          <h2 id="mylist-header">MyList</h2>
          <h3>Welcome {currentUser.username}!</h3> 
          
         </div>
          {/* <NewPost onPostAdd={handlePostAdd} />  */}
        <div>___________________________________________________________________</div>
          
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