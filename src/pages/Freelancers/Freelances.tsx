import React from 'react'
import './Freelances.scss'
import { Card } from '../../components/Card'

const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Frontend developer',
  },
  {
    name: 'Jean Bug',
    jobTitle: 'Fullstack Developer',
  },
]

const Freelances = () => {
  return (
    <div className="freelances-container">
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <div className="cards-container">
        {freelancerProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Freelances
