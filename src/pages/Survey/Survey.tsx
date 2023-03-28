import React from 'react'
import { useParams } from 'react-router-dom'

const Survey = () => {
  const { questionNumber } = useParams()
  return (
    <>
      <h1>Survey</h1>
      <h2>Question {questionNumber}</h2>
    </>
  )
}

export default Survey
