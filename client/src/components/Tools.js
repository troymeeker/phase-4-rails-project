import React, {useState} from "react";

function Tools(){
    const [showEdit, setShowEdit] = useState(false)
    
    function toggleEditItem(){
        // console.log('edit item');
        setShowEdit(!showEdit)
    }

    return (
        <div>
            <p> Tools</p>
            <ul>
                <li>Table Saw 
                    <button onClick={toggleEditItem}> EDIT</button>
                    <button> DELETE</button></li>
                <li>Shovel
                     <button onClick={toggleEditItem}> EDIT</button>
                     { showEdit? <form className="edit">
                        
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
                     <button> DELETE</button></li>
            </ul>
        </div>
    )
}

export default Tools;