import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  
  return (
    <nav className='navbar navbar-expand-sm bg-light'>
        <div className='container-fluid'>
            <NavLink className='navbar-brand' to='/'>useContext</NavLink>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <NavLink className={(navLink) => navLink.isActive ? 'nav-link active' : 'nav-link' } aria-current='page' to='/'>Home</NavLink>
                    <NavLink className={(navLink) => navLink.isActive ? 'nav-link active' : 'nav-link' } to='./login'>Login</NavLink>
                    <NavLink className={(navLink) => navLink.isActive ? 'nav-link active' : 'nav-link' } to='./about'>About</NavLink>
                    {/* <NavLink className='nav-link disabled'>Disabled</NavLink> */}
                </div>
            </div>
        </div>
    </nav>
  )
}
