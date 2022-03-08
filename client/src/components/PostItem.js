import React, {useState} from "react";
import EditForm from "./EditForm";

const PostItem = ({post, onItemDelete }) => {
    const [showEdit, setShowEdit] = useState(false)
   
    
    const {id, item_name, description, price} = post;

    function toggleEditItem(){
        setShowEdit(!showEdit)
    }

    function submitNewItem(e){
        e.preventDefault();
        console.log('edit existing item');
        // fetch(`/posts/${id}`, {
        //     method: "PATCH", 

        // } )
    }
    function handleDelete(){
        fetch(`posts/${id}`, {
            method: "DELETE",
        })
        onItemDelete(id)
    }
    
    
    return (
        <div className="each_post">
              
            <h4> {item_name} </h4>
            
            <h4> Description: {description}</h4>
            <h4>Price: ${price}</h4>
          { showEdit? <EditForm submitNewItem={submitNewItem}/> : null}
            <button onClick={toggleEditItem}>EDIT</button>

            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default PostItem;