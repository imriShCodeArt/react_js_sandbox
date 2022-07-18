import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from 'assets/myTheme'
import { Routes } from 'react-router-dom'
import AppBar from './components/misc/AppBar'
import NavBar from './components/misc/Navbar/'
import MyDrawer from './components/misc/Drawer'

function Theme({ appbar, navbar = {}, footer, brand, children }) {
  const MyAppBar = () => appbar && <AppBar />
  const MyNavBar = () => navbar && <NavBar />

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <MyAppBar />
      <MyNavBar />
      <MyDrawer />
      <Routes>{children}</Routes>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  appbar: PropTypes.object,
}

Theme.defaultProps = {
  appbar: {
    drawer:{
      anchor:'left',
      variant:'temporary',
      content:<>CONTENT</>
    },
    logo:{},
    links:[{}],
    layout:'left',
  },
}

export default Theme
