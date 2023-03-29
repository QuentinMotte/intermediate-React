import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import './Footer.scss'

const Footer = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <footer className="footer-container">
      <button onClick={() => toggleTheme()} className="color-theme-btn">
        Switch mode : {theme === 'light' ? '☀️' : '🌙'}
      </button>
    </footer>
  )
}

export default Footer
