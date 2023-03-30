import React, { useContext } from 'react'
import './Survey.scss'

import { useParams, Link } from 'react-router-dom'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber ?? '')
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  const { data, loading, error }: any = useFetch(`http://localhost:8000/survey`)
  const { surveyData }: any = data

  const { answers, saveAnswers } = useContext(SurveyContext)

  function saveReply(answer: any) {
    saveAnswers({ [questionNumberInt]: answer })
  }

  if (error) {
    return <span>There is a problem</span>
  }
  return (
    <div className="survey-container">
      <h2>Question {questionNumber}</h2>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <span>{surveyData && surveyData[questionNumberInt]}</span>
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
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
        ) : (
          <Link to="/results">Results</Link>
        )}
      </div>
    </div>
  )
}

export default Survey
