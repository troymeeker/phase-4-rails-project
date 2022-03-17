import React from "react";

function Logout({handleLogout}){

    //  function handleLogout(){
    //     fetch("/logout", {
    //         method: "DELETE", 
    //     })
    //     .then(res => {
    //         if(res.ok){
    //           setCurrentUser(null)
    //         }
    //     })
    // }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout;