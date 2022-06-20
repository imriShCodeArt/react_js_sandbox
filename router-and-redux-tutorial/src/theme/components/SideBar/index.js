import { Grid, Paper } from '@mui/material'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

function SideBar() {
  const Wrapper = ({ children }) => (
    <Grid item xs={12} md={4}>
      <Paper sx={{ minHeight: '100%' }}>{children || <Outlet />}</Paper>
    </Grid>
  )
  return (
    <Routes>
      <Route
        path='blog/:posts'
        element={<Wrapper>Posts by Category:</Wrapper>}
      />
      <Route
        path='category/:posts'
        element={<Wrapper>This is a Category Page:</Wrapper>}
      />
    </Routes>
  )
}
SideBar.defaultProps = {
  category: undefined,
}

export default SideBar
