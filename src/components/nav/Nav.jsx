import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Nav = () => {
  return (
    <div className="flex justify-end pr-12 py-8 text-lg nav-bar-total sm:text-2xl lg: text-3xl">
      <div className="pl-10 mr-auto">
        <NavLink to='/' activeClassName='active'>SP</NavLink>
      </div>
      <div className='space-x-10'>
        <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
        <NavLink to='/about' activeClassName='active'>About</NavLink>
        <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
      </div>
    </div>
  )
}

export default Nav

