import React, {useState} from "react";


function NewPost({handlePostAdd}){
  
    const [showform, setShowForm] = useState(false)
    const [price, setPrice] = useState("")
    const [item_name, setItemName] = useState("")
    const [description, setDescription] = useState("")
    const [category_id, setCategoryId] = useState("")

    function toggleRenderForm(){
        setShowForm(!showform)
    }

    function submitNewItem(e){
        e.preventDefault();
    //    console.log('new post');
        const post = {
            item_name: item_name,
            description: description, 
            price: price, 
            category_id: category_id
        };

        handlePostAdd(post)
        setItemName("")
        setDescription("")
        setPrice("")
        setCategoryId("")
    } 

    return( 
        <div >
        {showform? <button onClick={toggleRenderForm}>Hide Form</button> : <button onClick={toggleRenderForm}>Create new posting</button>} 
       { showform? <form onSubmit={submitNewItem} className="newpost">
           <h4>Create Post</h4><br/>
             <label>Item Name </label>
             <input name="item_name" placeholder="item name" onChange={(e) => setItemName(e.target.value)} value={item_name}/><br/>
             <label>Description </label>
             <input name="description" placeholder="description" className="item-description" onChange={(e) => setDescription(e.target.value)} value={description}/><br/>
             <label>Price </label>
             <input name="price" placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price}/><br/>
             <label>Category </label>
             <select onChange={(e) => setCategoryId(e.target.value)}>
                 <option value='1'>Sporting</option>
                 <option value='2'>Tools</option>
                 <option value='3'>Free</option>
             </select><br/>

             <button>Add Item</button>
        
         </form> : null}
     </div>
    )
}

export default NewPost;