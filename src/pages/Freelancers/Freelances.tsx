import './Freelances.scss'
import { Card } from '../../components/Card'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'

const Freelances = () => {
  const { data, loading, error }: any = useFetch(
    `http://localhost:8000/freelancers`
  )

  const freelancers = data?.freelancersList

  if (error) {
    return <span>Oops! There is an error</span>
  }

  return (
    <div className="freelances-container">
      <h1>Find your service provider</h1>
      <h2>Here at Shiny we bring together the best profiles for you.</h2>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loader-wrapper">
          <div data-testid="loader" className="loader"></div>
        </div>
      ) : (
        <div className="cards-container">
          {freelancers.map((profile: any, index: any) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Freelances
