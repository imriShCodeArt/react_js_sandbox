import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import PagesRouter from '../../../PagesRouter'

function Layout({ children }) {
  const Pad = () => <Grid item xs={0} md={1}></Grid>

  return (
    <>
      <Grid container>
        <Pad />
        <Grid item>
          <PagesRouter />
        </Grid>
        <Pad />
      </Grid>
      <Outlet />
    </>
  )
}

export default Layout
