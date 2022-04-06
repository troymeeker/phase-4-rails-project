import React from "react";

function About(){
    return(
        <div className="about">
            <h2>About</h2>
            <div className="text">
                <p>
                    This is an application that is designed to mimic the basic functionality of craigslist. 
                    A user can create an account or login to their existing account, create posts and read through current posts that have been made by other users. When a user creates a new item, only then
                    will that user have permission to edit or delete that post.  An admin can have permission to edit or delete any post. 
                    This application will be expanded upon soon!<br/>
                    Thanks for visiting!

                    {/* A user can also add any post to their favorite list and subsequently remove that item on the Favorites page. */}
                </p>
                
            </div>
        </div>
    )
}

export default About;