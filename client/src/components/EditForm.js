import React, { useState } from "react";
// import { UserContext } from "./UserContext";

function EditForm({onEditItem, post}){
        const {id, item_name, description, price } = post;
        const [updatedPrice, setUpdatedPrice] = useState(price)

    //  const {item_name, setItemName} = useContext(UserContext);
    // const [item_name, setItemName] = useState('')
    // const {description, setDescription} = useContext(UserContext);

    
    function handleFormSubmit(e){
          e.preventDefault();
        // console.log('edit existing item');

        fetch(`/posts/${id}`, {
            method: "PATCH" , 
            headers: {
               "Content-Type":"application/json",
            },
            body: JSON.stringify({ price: updatedPrice}),
        })
        .then((r) => r.json())
        .then((updatedPost) => {
            onEditItem(updatedPost)
        });
       
    }
   
 
    return( 
    <div >
                        
        <h4>{item_name}</h4>
        <h4>{description}</h4>
        <form className="edit" >
            <label>Edit Price</label> 
            <input type="number" placeholder="New price" value={updatedPrice} onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}></input><br/>
            
            <button type="submit" onClick={handleFormSubmit}>Confirm Edit</button>
        </form>            
    </div>)
}

export default EditForm;