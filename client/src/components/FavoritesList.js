import React from "react";
import FavPets from "./FavPets"

function FavoritesList({posts, onUnFav}) {

    const favPosts = posts.map((post) => 
        <FavPets 
            post={post}
            key={post.id}
            onUnFav={onUnFav}
        />
    )
    return(
        <div className="fav-list">
            <h3>Favorite Items</h3>
            {favPosts}
        </div>
    )
}
export default FavoritesList;