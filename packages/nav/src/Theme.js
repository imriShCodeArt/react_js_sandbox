import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import myTheme from 'assets/myTheme'

function Theme({ children }) {
  return (
    <ThemeProvider theme={myTheme()}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

export default Theme