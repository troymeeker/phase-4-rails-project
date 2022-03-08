import React, {useState} from "react";


function NewPost(){
  
    const [showform, setShowForm] = useState(false)

    function toggleRenderForm(){
        setShowForm(!showform)
    }
    function submitNewItem(e){
        e.preventDefault();
       
        // const post = {
        //     item_name: item_name,
        //     description: description, 
        //     price: price, 
        //     category: category

        // }
        // handleAddPost(post)
    }

    return( 
        <div >
        {showform? <button onClick={toggleRenderForm}>Hide Form</button> : <button onClick={toggleRenderForm}>Create new posting</button>} 
       { showform? <form onSubmit={submitNewItem} className="newpost">
           <h4>Create Post</h4><br/>
             <label>Item Name </label>
             <input name="item_name" placeholder="item name"/><br/>
             <label>Description </label>
             <input name="description" placeholder="description" className="item-description"/><br/>
             <label>Price </label>
             <input name="price" placeholder="price"/><br/>
             <label>Category </label>
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

export default NewPost;