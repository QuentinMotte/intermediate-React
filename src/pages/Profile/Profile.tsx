import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <img src={picture} alt={name} height={150} width={150} />
      <h1>{name}</h1>
      <span>{location}</span>
      <h2>{job}</h2>
      <div>
        {skills &&
          skills.map((skill) => (
            <div key={`skill-${skill}-${profileId}`}>{skill}</div>
          ))}
      </div>
      <div>{available ? 'Available immediately' : 'Unavailable'}</div>
      <span>{tjm} € / day</span>
    </div>
  )
}

export default Profile
