import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import myTheme from 'assets/myTheme'
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import Page from 'pages/Page'
import Footer from './components/Footer'

function Theme({ children }) {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  function closeDrawer() {
    setDrawerOpen(false)
  }
  function openDrawer() {
    setDrawerOpen(true)
  }
  return (
    <ThemeProvider theme={myTheme()}>
      <CssBaseline />
      <AppBar primaryAction={openDrawer} />
      <Navbar />
      <Drawer open={drawerOpen} closeAction={closeDrawer} />
      <Routes>
        <Route
          path={'/*'}
          element={
            <Page
              location={location.pathname.split('/').filter((i) => i !== '')}
            />
          }
        >
          <Route path={'*'} element={<>{children}</>} />
        </Route>
        <Route path={'/entry'} element={<Layout />}>
          <Route path={'*'} element={<>{children}</>} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default Theme

{
  /* <Layout>{children}</Layout> */
}
