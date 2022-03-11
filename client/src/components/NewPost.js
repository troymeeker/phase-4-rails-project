import React, {useState} from "react";

const initState = {
    item_name: "", 
    description: "", 
    price: "",
    category_id: "",

}


function NewPost({onPostAdd}){
  
    const [showform, setShowForm] = useState(false);
    const [formData, setFormData] = useState(initState);
   
    // const [item_name, setItemName] = useState("")
    // const [description, setDescription] = useState("")
    // const [price, setPrice] = useState("")
    // const [category_id, setCategoryId] = useState("")
    // const [errors, setErrors] = useState([])

    function toggleRenderForm(){
        setShowForm(!showform)
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    function submitNewPost(e){
        e.preventDefault();
    //    console.log('new post');
      fetch('/posts', {
          method:"POST", 
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })
      .then((r)=> r.json())
      .then((newPost) => {
          setFormData(formData);
          onPostAdd(newPost);
      })
   } 

    return( 
        <div >
        {showform? <button onClick={toggleRenderForm}>Hide Form</button> : <button onClick={toggleRenderForm}>Create new posting</button>} 
       { showform? <form onSubmit={submitNewPost} className="newpost">
           <h4>Create Post</h4><br/>
             <label>Item Name </label>
             <input
                type="text"
                placeholder="item name"
                id="item_name"
                onChange={handleChange} 
                value={formData.item_name}
               /><br/>
             <label>Description </label>
             <input 
                type="text"
                placeholder="description"
                className="item-description"
                id="description"
                onChange={handleChange} 
                value={formData.description}
               /><br/>
             <label>Price </label>
             <input 
                 type="integer"
                 placeholder="price" 
                 id="price"
                 onChange={handleChange}
                 value={formData.price}
              /><br/>
             <label>Category </label>
             <select onChange={handleChange} >
                 <option id="category_id" value={1}>Sporting</option>
                 <option id="category_id" value={2}>Tools</option>
                 <option id="category_id" value={3}>Free</option>
             </select><br/>

             <button>Add Item</button>
        
         </form> : null}
     </div>
    )
}

export default NewPost;