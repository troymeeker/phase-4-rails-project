import React from "react";
import Sporting from "./Sporting";
import Tools from "./Tools";
import Free from "./Free";

function Categories(){
    return (
        <div>
           <h3>Render all Posts</h3>
           
            <Sporting/>
            <Tools/>
            <Free/>
            
                
        </div>
    )
}

export default Categories;