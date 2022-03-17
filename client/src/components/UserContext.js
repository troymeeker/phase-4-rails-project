import React, { createContext, useState } from "react";

const UserContext = createContext();


function UserProvider({children}) {
    const [currentUser, setCurrentUser]= useState(null);
    
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          {children}
        </UserContext.Provider>

    ) 
}
 
// context needs default value
//create 
 
export { UserContext, UserProvider};