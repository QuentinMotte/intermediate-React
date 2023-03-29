import React, { useEffect, useState } from 'react'
import './Survey.scss'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber ?? '')
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  const [error, setError] = useState<string | null>(null)

  const fetchSurveyData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/survey')
      console.log(response.data.surveyData)
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchSurveyData()
  }, [])

  return (
    <div className="survey-container">
      <div>{error && <div className="error">{error}</div>}</div>
      <h1>Survey 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Results</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
      )}
    </div>
  )
}

export default Survey
