import React from 'react'
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
  return (
    <div className="card-container">
      <span className="label">{label}</span>
      <img src={picture} alt="freelancers" height={80} width={80} />
      <span className="title">{title}</span>
    </div>
  )
}

export default Card
