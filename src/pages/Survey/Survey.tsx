import React, { useEffect, useState } from 'react'
import './Survey.scss'

import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

interface SurveyData {
  [key: number]: string
}

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber ?? '')
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  const [surveyData, setSurveyData] = useState<SurveyData>({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSurveyData = async () => {
    setDataLoading(true)
    try {
      const response = await axios.get('http://localhost:8000/survey')
      setSurveyData(response.data.surveyData)
      setDataLoading(false)
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchSurveyData()
  }, [])

  return (
    <div className="survey-container">
      {error && <div className="error">{error}</div>}
      <h2>Question {questionNumber}</h2>
      {isDataLoading ? (
        <div className="loader"></div>
      ) : (
        <span>{surveyData[questionNumberInt]}</span>
      )}
      <div className="link-wrapper">
        <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
        ) : (
          <Link to="/results">Results</Link>
        )}
      </div>
    </div>
  )
}

export default Survey
