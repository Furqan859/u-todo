import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
  <NavLink to='/'  className="logo">Yoast SEO</NavLink>
  <div className="header-right">
    <a className="button">SEO Builder</a>
   
  </div>
</div>
  )
}

export default Header;