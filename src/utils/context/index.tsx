import { createContext, useState } from 'react'

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

interface SurveyContextType {
  answers: { [key: number]: boolean }
  saveAnswers: (newAnswers: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext<SurveyContextType | null>(null)

export const SurveyProvider = ({ children }: any) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers: any) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
