import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'

import { Home } from './pages/Home'
import { Survey } from './pages/Survey'
import { Results } from './pages/Results'
import { Freelances } from './pages/Freelancers'
import { Header } from './components/Header'
import { Error } from './components/Error'
import { Footer } from './components/Footer'

import { ThemeContext } from './utils/context/index'

const App = () => {
  const { theme } = useContext(ThemeContext)
  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme'
  return (
    <Router>
      <div className={themeClass}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelancers" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
