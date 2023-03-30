import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { EmailInput } from '../EmailInput'
import './Footer.scss'

const Footer = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <footer className="footer-container">
      <EmailInput theme={theme} />
      <button onClick={() => toggleTheme()} className="color-theme-btn">
        {theme === 'light' ? 'Switch mode : ☀️' : 'Switch mode : 🌙'}
      </button>
    </footer>
  )
}

export default Footer
