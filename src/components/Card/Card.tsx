import React, { useState } from 'react'
import DefaultPicture from '../../assets/img/defaultProfile.png'
import './Card.scss'

interface CardProps {
  label: string
  title: string
  picture?: string
}

const Card = ({
  label = '',
  title = '',
  picture = DefaultPicture,
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '⭐️' : ''
  return (
    <div onClick={() => setIsFavorite(!isFavorite)} className="card-container">
      <span className="label">{label}</span>
      <img src={picture} alt="freelancers" height={80} width={80} />
      <span className="title">
        {star} {title} {star}
      </span>
    </div>
  )
}

export default Card
