import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Survey } from './pages/Survey'
import { Results } from './pages/Results'
import { Freelancers } from './pages/Freelancers'
import { Header } from './components/Header'
import { Error } from './components/Error'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
