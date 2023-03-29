import React, { useContext } from 'react'
import './Results.scss'
import { SurveyContext } from '../../utils/context'

const Results = () => {
  const { answers } = useContext(SurveyContext)
  console.log(answers)

  return (
    <div className="results-container">
      <h1>Results</h1>
    </div>
  )
}

export default Results
