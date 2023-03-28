import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/survey/1">
          Survey
        </Link>
        <Link className="link" to="/freelancers">
          Profiles
        </Link>
      </nav>
    </div>
  )
}

export default Header
