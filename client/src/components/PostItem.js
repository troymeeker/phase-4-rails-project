import React, { useState} from "react";
import EditForm from "./EditForm";

const PostItem = ({post, onItemDelete, onEditItem}) => {
    const [showEdit, setShowEdit] = useState(false)
    
    const {id, item_name, description, price, body} = post;

    function toggleEditItem(){
        setShowEdit(!showEdit)
    }

    function submitNewEdit(updatedPost){
        onEditItem(updatedPost)
      
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
          { showEdit? <EditForm onNewEdit={submitNewEdit}  post={post} body={body}/> : null}
            
            <button onClick={toggleEditItem}>EDIT</button>

            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default PostItem;