import React from "react";

function Free(){
    function editItem(){
        console.log('edit item');
    }
   
    return (
        <div>
            <p> Free </p>
            <ul>
                <li>Couch <button onClick={editItem}> EDIT</button><button> DELETE</button></li>
                <li>Wood Pallets <button onClick={editItem}> EDIT</button><button> DELETE</button></li>
            </ul>
        </div>
    )
}

export default Free;