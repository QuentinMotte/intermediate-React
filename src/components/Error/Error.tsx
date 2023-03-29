import React from 'react'
import './Error.scss'
import darkLogo from '../../assets/img/dark-logo.png'

const Error = () => {
  return (
    <div className="error-container">
      <h1>Oops.. 🙈</h1>
      <img src={darkLogo} alt="img-error" />
      <h2>It looks like the page you're after doesn't exist</h2>
    </div>
  )
}

export default Error
