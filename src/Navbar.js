import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>

            <NavLink to="/edit" >Edit</NavLink>
            <NavLink to="/">Home</NavLink>
            



        </div>
    );
}

export default Navbar;