import { Grid, Paper } from '@mui/material'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

function SideBar() {
  const Wrapper = () => (
    <Grid item xs={12} md={4}>
      <Paper sx={{ minHeight: '100%' }}>
        <Outlet />
      </Paper>
    </Grid>
  )
  return (
    <Routes>
      <Route path='blog' element={<Wrapper />}>
        <Route path=':posts' element={<>Posts by Category:</>} />
      </Route>
      <Route path='category' element={<Wrapper />}>
        <Route path=':posts' element={<>This is a Category Page:</>} />
      </Route>
    </Routes>
  )
}
SideBar.defaultProps = {
  category: undefined,
}

export default SideBar
