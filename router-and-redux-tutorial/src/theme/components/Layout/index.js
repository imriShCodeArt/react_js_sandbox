import { Grid } from '@mui/material'
import React from 'react'

function Layout({ children }) {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={12} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
