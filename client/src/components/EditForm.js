import React, { useState } from "react";
// import { UserContext } from "./UserContext";

function EditForm({onEditItem, post}){
        const {id, description, price } = post;
        const [updatedPrice, setUpdatedPrice] = useState(price)
        const [updatedDescription, setupdatedDescription] = useState(description);

    //  const {item_name, setItemName} = useContext(UserContext);
    // const [item_name, setItemName] = useState('')
   

    
    function handleFormSubmit(e){
          e.preventDefault();
        // console.log('edit existing item');

        fetch(`/posts/${id}`, {
            method: "PATCH" , 
            headers: {
               "Content-Type":"application/json",
            },
            body: JSON.stringify({ 
                description: updatedDescription,
                price: updatedPrice
                

            }),
        })
        .then((r) => r.json())
        .then((updatedPost) => {
            onEditItem(updatedPost)
        });
       
    }
   
 
    return( 
    <div >
                        
        <form className="edit" onSubmit={handleFormSubmit}>
            <label>Edit Description</label>
            <input type="text" placeholder={description} value={updatedDescription} onChange={(e) => setupdatedDescription(e.target.value)}></input>
            <label>Edit Price</label> 
            <input type="number" placeholder="New price" value={updatedPrice} onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}></input><br/>
            
            <button type="submit" >Confirm Edit</button>
        </form>            
    </div>)
}

export default EditForm;