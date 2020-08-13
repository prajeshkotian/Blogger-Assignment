// JavaScript source code
import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <ul className="Navigation">
            <li> <NavLink to='/New-Post'><div >New Post</div></NavLink> </li>
            <li> <NavLink to='/Posts'><div >Published</div></NavLink> </li>
        </ul>
        );
}

export default Navigation;