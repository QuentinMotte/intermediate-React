import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/survey/1">Survey</Link>
        <Link to="/freelancers">Profiles</Link>
      </nav>
    </div>
  )
}

export default Header
