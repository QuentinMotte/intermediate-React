import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import DarkLogo from '../../assets/img/dark-logo.png'

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <Link to="/">
          <img src={DarkLogo} alt="logo-home" />
        </Link>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/freelancers">
            Profiles
          </Link>
          <Link className="link" to="/survey/1">
            Take the survey
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
