import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, setCurrentUser}) => {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE", 
        })
        .then(res => {
            if(res.ok){
              setCurrentUser(null)
            }
        })
    }
  
  return (
    <div >
      <nav className='nav-header'>
        <ul className='navbar'>
         <li className='navbar-item'><Link to ='/'>HOME</Link> </li>
         <li className='navbar-item'><Link to='/about'>ABOUT</Link></li>
         <li className='navbar-item'><Link to='/new'>CREATE NEW POSTING</Link></li>
         <li className='navbar-item'><Link to='/favorites'>FAVORITES LIST</Link></li>
         <li className='navbar-item'>TEST</li>
          
        </ul>
        <button className="logout-button" onClick={handleLogout}>LOG OUT</button>
      </nav>  
    </div>
  );
}

export default Navbar;