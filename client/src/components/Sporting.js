import React from "react";

function Sporting(){

    function editItem(){
        console.log('edit item');
    
    }
    // function deleteItem(){

    // }
   
      
    

    return (
        <div>
            <p> Sporting </p>
            <ul>
                <li>Bike <button onClick={editItem}> EDIT</button><button> DELETE</button></li>
                <li>Golf clubs <button onClick={editItem}> EDIT</button><button> DELETE</button></li>
            </ul>
        </div>
    )
}

export default Sporting;