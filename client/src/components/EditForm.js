import React from "react";

function EditForm({submitNewEdit}){
    return( 
    <form className="edit" onSubmit={submitNewEdit}>
                        
        <label>Edit Item Name</label>
        <input name="item name" placeholder="item name"></input><br/>
        <label>Edit Description</label>
        <input name="description" placeholder="description" className="item-description"></input><br/>
        <label>Edit Price</label>
        <input name="price" placeholder="price"></input><br/>
        <label>Edit Category</label>
        <select name="category" placeholder="category">
            <option>Select One</option>
            <option>Sporting</option>
            <option>Tools</option>
            <option>Free</option>
        </select><br/>
        <button>Confirm Edit</button>
                    
    </form>)
}

export default EditForm;