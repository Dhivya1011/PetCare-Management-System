import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='container-fluid'>
        <div className='navbar1'>
            <i class="fa-solid fa-paw"></i>        
            <h2>PAWPURFUCT</h2>
        </div>
        <div className=' navbar2'>
            <nav>
                <ul>
                <li><NavLink to='/'></NavLink></li>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='contactus'>Contact Us</NavLink></li>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
