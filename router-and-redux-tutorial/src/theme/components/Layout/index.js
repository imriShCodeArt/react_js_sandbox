import { Grid } from '@mui/material'
import React from 'react'

function Layout({ children }) {
  return (
    <Grid container justifyContent={'center'}>
        {children}
    </Grid>
  )
}

export default Layout
