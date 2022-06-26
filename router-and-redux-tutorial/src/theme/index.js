import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import myTheme from 'assets/myTheme'
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

function Theme({ children }) {
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
      <Layout>{children}</Layout>
    </ThemeProvider>
  )
}

export default Theme
