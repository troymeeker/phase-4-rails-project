import React from "react";


function Navbar({currentUser, handleLogout}) {
    return (
        <div>
            <h2>Welcome {currentUser.username}!</h2>
            <button onClick={handleLogout}>Logout</button>
          
        </div>
    )

}

export default Navbar;