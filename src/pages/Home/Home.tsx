import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import HomeIllustration from '../../assets/img/home-illustration.svg'

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="left-column">
          <h2>
            Identify your needs and we'll take care of the rest along with our
            talented professionals
          </h2>
          <Link className="link" to="/survey/1">
            Take the survey
          </Link>
        </div>
        <img src={HomeIllustration} alt="home" />
      </div>
    </div>
  )
}

export default Home
