import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.scss'

interface ProfileData {
  picture: string
  name: string
  location: string
  tjm: number
  job: string
  skills: string[]
  available: boolean
  id: number
}

function Profile() {
  const { id: queryId } = useParams()
  const [profileData, setProfileData] = useState<ProfileData | null>(null)

  useEffect(() => {
    fetch(`http://localhost:8000/freelancer?id=${queryId}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse)
        setProfileData(jsonResponse?.freelancerData)
      })
  }, [queryId])

  if (!profileData) {
    return <div>Loading...</div>
  }

  const {
    picture,
    name,
    location,
    tjm,
    job,
    skills,
    available,
    id: profileId,
  } = profileData

  return (
    <div className="profile-container">
      <img src={picture} alt={name} height={150} width={150} />
      <div className="profile-detail">
        <div className="title-wrapper">
          <h1>{name}</h1>
          <span className="location">{location}</span>
        </div>
        <h2>{job}</h2>
        <div className="skills">
          {skills &&
            skills.map((skill) => (
              <div className="skill" key={`skill-${skill}-${profileId}`}>
                {skill}
              </div>
            ))}
        </div>
        <div className="available">
          {available ? 'Available immediately' : 'Unavailable'}
        </div>
        <span className="price">{tjm} € / day</span>
      </div>
    </div>
  )
}

export default Profile
