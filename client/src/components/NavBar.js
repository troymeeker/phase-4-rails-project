import React from "react";
import FavoritesList from "./FavoritesList";
// import Home from "./Home";
import Logout from "./Logout"
 import { Routes, Route, Link} from 'react-router-dom';





function NavBar({handleLogout, currentUser, setCurrentUser}) {
  return (
    <div>
        <h4>
            <Link to="/"> Home</Link>
        </h4>
        <h4>
            <Link to="/favorites">Favorite Items</Link>
        </h4>

        <Routes>
            {/* <Route path="/home" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
            <Route path="/favorites" element={<FavoritesList />}/>

        </Routes>


        
        <Logout handleLogout={handleLogout}/>
        
     </div>
       
    )

}
  

export default NavBar;