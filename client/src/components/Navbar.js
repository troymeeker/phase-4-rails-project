import React from "react";


function Navbar({currentUser, handleLogout}) {
    // const msg = useContext(UserContext);
    
    return (
        <div>
            <h2>Welcome {currentUser.username}!</h2>
            <button onClick={handleLogout}>Logout</button>
            {/* <button> DarkMode</button> */}
        </div>
    )

}

export default Navbar;