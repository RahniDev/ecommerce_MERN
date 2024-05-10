import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/my-account"><FaUser /></NavLink></li>
        <li><NavLink to="/cart"><FaCartShopping /></NavLink></li>
        <hr />
      </ul>
    </nav>
  )
}

export default Navbar