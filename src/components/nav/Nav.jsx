import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import './Navbar.css'

const Nav = () => {
  const location = useLocation()

  return (
    <div className="flex justify-end pr-12 py-8 text-3xl nav-bar-total">
      <div className="home-nav-button">
        <a href="/">SP</a>
      </div>
      <div className='space-x-10'>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Nav