import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import myTheme from './assets/myTheme'
import AppBar from './components/AppBar'
import Layout from './components/Layout'
import { useLocation } from 'react-router-dom'

function Theme({ children }) {
  const location = useLocation()
    .pathname.split('/')
    .filter((item) => item !== '')

  return (
    <ThemeProvider theme={myTheme()}>
      <CssBaseline />
      <AppBar />
      <Layout>{children}</Layout>
    </ThemeProvider>
  )
}

export default Theme
