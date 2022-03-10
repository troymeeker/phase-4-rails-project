import React, {useState} from "react";
import EditForm from "./EditForm";

const PostItem = ({post, onItemDelete, onEditItem}) => {
    const [showEdit, setShowEdit] = useState(false)
   
    
    const {id, item_name, description, price} = post;

    function toggleEditItem(){
        setShowEdit(!showEdit)
    }

    function submitNewEdit(e){
        e.preventDefault();
        console.log('edit existing item');

        fetch(`/posts/${id}`, {
            method:"PATCH", 
            headers: {
               "Content-Type":"application/json",
            },
            body: JSON.stringify({post}),
        })
        .then(r => r.json())
        .then(onEditItem);
       
    }
    
    function handleDelete(){
        fetch(`posts/${id}`, {
            method: "DELETE",
        })
        onItemDelete(id)
    } 
     
    
    return (
        <div className="each_post">
              
            <h3> {item_name} </h3>
            <h4> Description: {description}</h4>
            <h4>Price: ${price}</h4>
          { showEdit? <EditForm submitNewEdit={submitNewEdit}/> : null}
            {/* <h4>Posted By: {item_name}</h4> */}
            <button onClick={toggleEditItem}>EDIT</button>

            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default PostItem;