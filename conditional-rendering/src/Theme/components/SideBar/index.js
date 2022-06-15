import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <Outlet />
      <Grid item xs={4} md={3}>
        <Paper sx={{ minHeight: '100%' }}>
          <Box>
            <Typography variant='h5'>Recent Posts:</Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  )
}
SideBar.defaultProps = {
  category: undefined,
}
export default SideBar
