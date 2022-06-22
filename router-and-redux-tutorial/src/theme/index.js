import { CssBaseline, ThemeProvider } from '@mui/material'
import { width } from '@mui/system'
import React, { useEffect, useState } from 'react'
import myTheme from './assets/myTheme'
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import Navbar from './components/Navbar'

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
      <AppBar width primaryAction={openDrawer} />
      <Navbar />
      <Drawer open={drawerOpen} closeAction={closeDrawer} />
      {children}
    </ThemeProvider>
  )
}

export default Theme
