import React, { useState } from "react";
// import { UserContext } from "./UserContext";

import EditForm from "./EditForm";

const PostItem = ({post, onItemDelete, onEditItem}) => {
    //  const {item_name, setItemName} = useContext(UserContext);

    const [showEdit, setShowEdit] = useState(false)
    
    const {id, item_name, description, price, category_id} = post;

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
     
    
    return (
        <div className="each_post">
          
            <h3> {item_name} </h3>
            <h4> Description: {description}</h4>
            <h4>Price: ${price}</h4>
            <h4>Category: {category_id.category_type}</h4>
          { showEdit? <EditForm onEditItem={submitNewEdit} post={post} /> : null}
            
            <button onClick={toggleEditItem}>EDIT PRICE</button>

            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default PostItem;