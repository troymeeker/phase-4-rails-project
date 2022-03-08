import React, {useState, useEffect} from "react";
// import EditForm from './EditForm'
import PostItem from "./PostItem";

function RenderPost(){

    // const [showEdit, setShowEdit] = useState(false)
     const [posts, setPosts] = useState([])
    // const {item_name, description, price} = posts;

    useEffect(() => {
        fetch('/posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
    }, [])

    // function toggleEditItem(){
    //     setShowEdit(!showEdit)
    // }
    // function submitNewItem(e){
    //     e.preventDefault();
    //     console.log('edit existing item');
    // }
    function handleDelete(){
        console.log('delete item');
    }
    
   
      const postDetails = posts.map((post) => {
       return (
       <PostItem 
         handleDelete={handleDelete} 
        //  toggleEditItem={toggleEditItem} 
         post={post} key={post.id}

       >

       </PostItem>

       )  
      })

    return (
        <div>
            <p> <strong>Category</strong> </p>
            <ul className="list">
               
               {postDetails} 
             
                  
            </ul>
           
        </div>
    )
}

export default RenderPost;