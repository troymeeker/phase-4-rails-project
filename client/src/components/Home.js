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
    
 

    function handleSortAlpha(){
      fetch('/posts/order')
       .then((resp) => resp.json())
       .then((posts) => setPosts(posts))
    }

    function handleSortPrice(){
      fetch('/posts/price')
       .then((resp) => resp.json())
       .then((posts) => setPosts(posts))
    }

    return (
        <div className="authpage">
         
         <div className="header">
          <h2 id="mylist-header">MyList</h2>
          <h3>Welcome {currentUser.username}!</h3> 
          
         </div>
          {/* <NewPost onPostAdd={handlePostAdd} />  */}
          <button onClick={handleSortPrice}>Filter Items by Price</button>
          <button onClick={handleSortAlpha}>Filter alphabetically</button>
        <div>___________________________________________________________________</div>
          
            { posts.map((post) => (
              <PostItem 
                key={post.id}
                post={post}
                onItemDelete={handlePostDelete}
                onEditItem={handleEditPost}
                setPosts={setPosts}
                currentUser={currentUser}
                
              />
             ))}
        
        </div>
    )
}


export default Home;