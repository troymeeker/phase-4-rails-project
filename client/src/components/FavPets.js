import React from "react";

function FavPets({post, onUnFav}){
    const {item_name, description, price} = post;

    function handleUnFav(){
        fetch(`/posts/${post.id}`, {
            method:"PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isFavorite: false})
        })
        .then((resp) => resp.json())
        .then((favPost) =>  onUnFav(favPost))
    }

    return (
        <div>
            <ul>
            <h3> {item_name} </h3>
            <h4> Description: {description}</h4>
            <h4>Price: ${price}</h4>
                <button onClick={handleUnFav}>Remove From Favorites</button>
            </ul>
        </div>
    )
}

export default FavPets;