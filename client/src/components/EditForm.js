import React, { useState } from "react";

// const body = { 
//     item_name: post.item_name, 
//     description: post.description, 
//     price: post.price, 
//     category: post.category_id
// };

function EditForm({onNewEdit, post, body}){
    // const [message, setMessage] = useState(body)
    const {id, item_name, description, price, category_id} = post;
    const [itemName, setItemName] = useState(item_name)
    
    function handleFormSubmit(e){
        e.preventDefault();
        // console.log('edit existing item');

        fetch(`/posts/${id}`, {
            method:"PATCH", 
            headers: {
               "Content-Type":"application/json",
            },
            body: JSON.stringify({body}),
        })
        .then(r => r.json())
        .then((post) => onNewEdit(post));
       
    }
 


 
    return( 
    <form className="edit" onSubmit={handleFormSubmit}>
                        
        <label>Edit Item Name</label>
        <input type="text" name="item name" placeholder="item name"  value={item_name} onChange={(e) => setItemName(e.target.value)}></input><br/>
        <label>Edit Description</label>
        <input type="text" name="description" placeholder="description" className="item-description" ></input><br/>
        <label>Edit Price</label>
        <input type="integer" name="price" placeholder="price"  ></input><br/>
        <label>Edit Category</label>
        <select name="category" placeholder="category" >
            <option>Select One</option>
            <option>Sporting</option>
            <option>Tools</option>
            <option>Free</option>
        </select><br/>
        <button>Confirm Edit</button>
                    
    </form>)
}

export default EditForm;