import { Grid } from '@mui/material'
import React from 'react'
import SideBar from '../SideBar'

function Layout({ children }) {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item flexGrow={1} xs={12} lg={10} xl={8}>
        {children}
      </Grid>
      <SideBar />
    </Grid>
  )
}

export default Layout
