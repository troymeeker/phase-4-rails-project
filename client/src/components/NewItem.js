import React from "react";


function NewItem(){
    return( 
        <div>
            <p>create a posting</p>
            <form>
                <label>Item Name</label>
                <input name="item_name" placeholder="item name"/><br/>
                <label>Description</label>
                <input name="description" placeholder="description" /><br/>
                <label>Price</label>
                <input name="price" placeholder="price"/><br/>
                <label>Image URL</label>
                <input name="image" placeholder="url"/><br/>

                <button>Add Item</button>
           
            </form>
        </div>
    )
}

export default NewItem;