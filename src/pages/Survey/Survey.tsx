import React, { useEffect, useState, useContext } from 'react'
import './Survey.scss'

import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { SurveyContext } from '../../utils/context'

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
  const { answers, saveAnswers } = useContext(SurveyContext)

  function saveReply(answer: boolean) {
    saveAnswers({ [questionNumberInt]: answer })
  }

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
      <div className="btn-wrapper">
        <button
          className={`btn-reply ${
            answers[questionNumberInt] === true ? 'selected' : ''
          }`}
          onClick={() => saveReply(true)}
        >
          Yes
        </button>
        <button
          className={`btn-reply ${
            answers[questionNumberInt] === false ? 'selected' : ''
          }`}
          onClick={() => saveReply(false)}
        >
          No
        </button>
      </div>
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
