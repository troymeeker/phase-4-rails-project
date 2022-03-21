import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div >
      <nav className='navbar'>
        <ul >
         <li><Link to ='/'>Home</Link> </li>
         <li><Link to='/layout'>Layout</Link></li>
         <li><Link to='/test'>Test</Link></li>
        
          
        </ul>
      </nav>  
    </div>
  );
}

export default Navbar;