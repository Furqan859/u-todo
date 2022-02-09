import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            
              <NavLink to="/edit"  className="home">Edit</NavLink>
              
            

        </div>
    );
}

export default Navbar;