import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import myTheme from './myTheme'
import AppBar from './components/AppBar'
import PagesRouter from '../PagesRouter'
import Layout from './components/Layout'
import SideBar from './components/SideBar'

function Theme({ children }) {
  return (
    <ThemeProvider theme={myTheme()}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout />}>
            <Route path='*' element={<AppBar />} />
            <Route path='*' element={<SideBar />} />
          </Route>
          <Route path='/register' element={<></>} />
        </Routes>
      </BrowserRouter>
      {children}
    </ThemeProvider>
  )
}

export default Theme
