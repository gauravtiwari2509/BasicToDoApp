import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <span>TODO APP</span>
                <div>
                    <NavLink className='navlink' to="/">Home</NavLink>
                    <NavLink className='navlink' to="/preview">Preview</NavLink>
                </div>


            </nav>


        </>
    )
}

export default Navbar