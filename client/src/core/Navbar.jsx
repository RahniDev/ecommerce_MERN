import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../assets/logo.jpg'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-start'>
      <span>
      <img src={logo} alt="Logo" width='50%' />
      </span>
      <Search />
      <ul className='flex justify-center'>
   
        <li><NavLink to="/my-account"><FaUser /></NavLink></li>
        <li className='pl-8'><NavLink to="/cart"><FaCartShopping /></NavLink></li>
        <hr />
      </ul>
    </nav>
  )
}

export default Navbar