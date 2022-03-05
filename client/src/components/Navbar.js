import React from "react";


function Navbar({currentUser, handleLogout}) {
    return (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={handleLogout}>Logout</button>
          
        </div>
    )

}

export default Navbar;