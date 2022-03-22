import React, { useState } from "react";

// import { UserContext } from "./UserContext";

import EditForm from "./EditForm";

const PostItem = ({post, onItemDelete, onEditItem, onFavorite}) => {
    //  const {item_name, setItemName} = useContext(UserContext);

    const [showEdit, setShowEdit] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    
    const {id, item_name, description, price} = post;

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
        fetch(`posts/${id}`, { 
            method: "PATCH",  
            headers: {
                "Content-type": "application/json"
            }, 
             body: JSON.stringify({isFavorite: true})
           })
       .then((resp) => resp.json())
       .then((favPost) => onFavorite(favPost))
       
       }

    //    function handleUnFavorite(){
    //     setIsFavorite(!isFavorite)
    //     fetch(`posts/${id}`, { 
    //         method: "PATCH",  
    //         headers: {
    //             "Content-type": "application/json"
    //         }, 
    //          body: JSON.stringify({isFavorite: false})
    //        })
    //    .then((resp) => resp.json())
    //    .then((favPost) => onFavorite(favPost))
       
    //    }
     
    
    return (
        
        <div className="each_post">
          
            <h3> {item_name} </h3>
            <h4> Description: {description}</h4>
            <h4>Price: ${price}</h4>
            
          { showEdit ? <EditForm onEditItem={submitNewEdit} post={post} /> : null}
            
            <button onClick={toggleEditItem} className="each-post-btn">EDIT ITEM</button>

            <button onClick={handleDelete} className="each-post-btn">DELETE</button>
            
           { isFavorite ? 
                (
                <button onClick={handleFavorite} className="each-post-btn">⭐</button>
                ) : (
                <button onClick={handleFavorite} className="each-post-btn">☆</button>
                ) } 
            <div>___________________________________________________________________</div>
        </div>
    );
}

export default PostItem;