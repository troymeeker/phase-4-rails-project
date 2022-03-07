import React, { useState } from "react";

function NewItem(){
    const [showform, setShowForm] = useState(false)
    function toggleRenderForm(){
        setShowForm(!showform)
    }

    function submitNewItem(e){
        e.preventDefault();
       
        // const item = {
        //     item_name: item_name,
        //     description: description, 
        //     price: price

        // }
    }
    return( 
        <div >
           {showform? <button onClick={toggleRenderForm}>Hide Form</button> : <button onClick={toggleRenderForm}>Create new posting</button>} 
          { showform? <form onSubmit={submitNewItem} className="newpost">
              <h4>Create New Posting:</h4><br/>
                <label>Item Name</label>
                <input name="item_name" placeholder="item name"/><br/>
                <label>Description</label>
                <input name="description" placeholder="description" /><br/>
                <label>Price</label>
                <input name="price" placeholder="price"/><br/>
                <label>Category</label>
                <select >
                    <option>Sporting</option>
                    <option>Tools</option>
                    <option>Free</option>
                </select><br/>

                <button>Add Item</button>
           
            </form> : null}
        </div>
    )
}

export default NewItem;