import React, { useContext } from 'react'
import './Results.scss'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'

function formatFetchParams(answers: any) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export function formatJobList(title: any, listLength: any, index: any) {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

export function formatQueryParams(answers: any) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

const Results = () => {
  const { answers } = useContext(SurveyContext)
  const queryParams = formatQueryParams(answers)

  const { data, isLoading, error }: any = useFetch(
    `http://localhost:8000/results?${queryParams}`
  )

  if (error) {
    return <span>There is an error</span>
  }

  const resultsData = data?.resultsData
  return isLoading ? (
    <div className="loader-wrapper">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="results-container">
      <h2>
        You require the following skills:
        {resultsData &&
          resultsData.map((result: any, index: any) => (
            <span
              className="job-title"
              key={`result-title-${index}-${result.title}`}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </span>
          ))}
      </h2>
      <Link to="/freelancers">Take a look at our freelancer profiles</Link>
      <div className="wrapper-description">
        {resultsData &&
          resultsData.map((result: any, index: number) => (
            <div
              className="job-description"
              key={`result-detail-${index}-${result.title}`}
            >
              <span className="job-title">{result.title}</span>
              <p>{result.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Results
