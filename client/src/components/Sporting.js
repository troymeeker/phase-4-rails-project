import React, {useState} from "react";

function Sporting(){

    const [showEdit, setShowEdit] = useState(false)

    function toggleEditItem(){
        setShowEdit(!showEdit)
    }
    function submitNewItem(e){
        e.preventDefault();
        console.log('submit new item');
    }
    function handleDelete(){
        console.log('delete item');
    }
   
      

    return (
        <div>
            <p> <strong>Sporting</strong> </p>
            <ul className="list">
                <li>Old Bike  <button onClick={toggleEditItem}>EDIT</button><button onClick={handleDelete}> DELETE</button></li>
                <li>Golf Clubs <button onClick={toggleEditItem}>EDIT</button><button onClick={handleDelete}> DELETE</button></li>
            { showEdit? <form className="edit" onSubmit={submitNewItem}>
                        
                <label>Edit Item Name</label>
                <input name="item name" placeholder="item name"></input><br/>
                <label>Edit Description</label>
                <input name="description" placeholder="description"></input><br/>
                <label>Edit Price</label>
                <input name="price" placeholder="price"></input><br/>
                 <label>Edit Category</label>
                <select name="category" placeholder="category">
                    <option>Sporting</option>
                    <option>Tools</option>
                    <option>Free</option>
                 </select><br/>
                 <button>Submit</button>
                             
                   </form> : null} 
                  
            </ul>
           
        </div>
    )
}

export default Sporting;