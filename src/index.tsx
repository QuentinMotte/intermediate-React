import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { SurveyProvider, ThemeProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
        <App />
      </SurveyProvider>
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
