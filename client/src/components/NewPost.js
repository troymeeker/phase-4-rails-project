import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function NewPost({onPostAdd}){
     const navigate = useNavigate();
  
    const [item_name, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category_id, setCategoryId] = useState("");
     

  


    function submitNewPost(e){
        e.preventDefault();
         
        const post = {
            item_name: item_name, 
            description: description, 
            price: price, 
            category_id: category_id, 
            
        }
        onPostAdd(post)
        setItemName("")
        setDescription("")
        setPrice("")
        setCategoryId("")
       

   } 
   function goHome(){
       navigate('/');
   }
   
   function handleItemChange(e){
       setItemName(e.target.value)
   }

   function handleDescriptionChange(e){
       setDescription(e.target.value)
   }

   function handlePriceChange(e){
       setPrice(e.target.value)
   }

   function handleCategoryChange(e){
       setCategoryId(e.target.value)

   }

//   

    return( 
        <div className="new-item-page">
        {/* {showform? <button onClick={toggleRenderForm} className="newpost-button">HIDE FORM</button> : <button className="newpost-button" onClick={toggleRenderForm}>CREATE NEW POSTING</button>}   */}
       <form onSubmit={submitNewPost} className="newpost">
           <h4>CREATE NEW POST</h4><br/>
             <label>Item Name </label>
             <input
                type="text"
                placeholder="item name"
                id="item_name"
                onChange={handleItemChange} 
                value={item_name}
               /><br/>
             <label>Description </label>
             <input 
                type="text"
                placeholder="description"
                className="item-description"
                id="description"
                onChange={handleDescriptionChange} 
                value={description}
               /><br/>
             <label>Price </label>
             <input 
                 type="integer"
                 placeholder="price" 
                 id="price"
                 onChange={handlePriceChange}
                 value={price}
              /><br/>
             <label>Category </label>
             <select onChange={handleCategoryChange} >
                 <option id="category_id" value=''>Select One</option>
                 <option id="category_id" value='1'>Sporting</option>
                 <option id="category_id" value='2'>Tools</option>
                 <option id="category_id" value='3'>Misc</option>
                 <option id="category_id" value='4'>Free</option>
             </select><br/>

             <button className="add-btn">ADD ITEM</button>
                  
         </form>
         <button className="home-btn" onClick={goHome}> HOME</button> 
                
     </div>
    )
}

export default NewPost;