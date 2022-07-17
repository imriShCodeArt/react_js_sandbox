import { createContext } from 'react'
import { useLocation } from 'react-router-dom'

const ThemeContext = () => {
    const l = useLocation().pathname

  return createContext({
    name: 'Theme Context - GLOBAL',
    location:l
  })
}
export const ContextProvider = ThemeContext.Provider
export default ThemeContext
