import { Grid } from '@mui/material'
import React from 'react'

function Layout({ children, sidebar }) {
  const Pad = () => <Grid item xs={0} md={1}></Grid>

  return (
    <Grid container>
      <Pad />
      <Grid item flexGrow={1}>
        {children}
      </Grid>
      {sidebar}
      <Pad />
    </Grid>
  )
}

export default Layout
