import React, { useEffect, useState } from 'react'
import './Freelances.scss'
import { Card } from '../../components/Card'
import axios from 'axios'

interface Freelancer {
  name: string
  job: string
  picture: string
}

const Freelances = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFreelancers = async () => {
    setDataLoading(true)
    try {
      const response = await axios.get('http://localhost:8000/freelancers')
      setFreelancers(response.data.freelancersList)
      setDataLoading(false)
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchFreelancers()
  }, [])

  return (
    <div className="freelances-container">
      <h1>Find your service provider</h1>
      <h2>Here at Shiny we bring together the best profiles for you.</h2>
      {error && <div className="error">{error}</div>}
      {isDataLoading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="cards-container">
          {freelancers.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Freelances
