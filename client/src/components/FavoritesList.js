import React from "react";
import PostItem from "./PostItem";

function FavoritesList({posts, onUnFav}) {

    const favPosts = posts.map((post) => 
        <PostItem 
            post={post}
            key={post.id}
            onUnFav={onUnFav}
        />
    )
    return(
        <div className="nav-item">
            <h3>Favorite Items</h3>
            {favPosts}
        </div>
    )
}
export default FavoritesList;