import React, { useState } from "react";
import EditForm from "./EditForm";


const PostItem = ({post, onItemDelete, onEditItem, currentUser}) => {
      
    const [showEdit, setShowEdit] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
   
       
    const {id, item_name, description, price, user_can_modify} = post;

    function toggleEditItem(){
        setShowEdit(!showEdit)
    }

    function submitNewEdit(updatedPost){
        onEditItem(updatedPost);
        // setItemName()
    }

    function handleDelete(){
        fetch(`posts/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
              onItemDelete(id); 
            }
        })
    } 

    function handleFavorite(){
        setIsFavorite(!isFavorite)
       }

  
    
    return (
        
        <div className="each_post">
          
            <h3> {item_name} </h3>
            <h4> Description: {description}</h4>
            <h4>Price: ${price}</h4>
            {/* <h4>Posted By: {user_id}</h4> */}
            
            { showEdit ? <EditForm onEditItem={submitNewEdit} post={post} /> : null}
                       
           { user_can_modify ?
            (
               <div>
                 <button onClick={toggleEditItem} className="each-post-btn">EDIT ITEM</button>
                 <button onClick={handleDelete} className="each-post-btn">DELETE</button>
               </div>
             ) : null }
                
           { isFavorite ? 
                (
                <button onClick={handleFavorite} className="each-post-btn">⭐</button>
                ) : (
                <button onClick={handleFavorite} className="each-post-btn">☆</button>
                ) } 
          
            <div>______________________________________________________________</div>
        </div>
    );
}

export default PostItem;