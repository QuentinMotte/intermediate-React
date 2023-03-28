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
      <span>{label}</span>
      <img src={picture} alt="freelancers" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

export default Card
