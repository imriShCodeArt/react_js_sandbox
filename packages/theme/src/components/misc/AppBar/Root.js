import { AppBar, Box } from '@mui/material'
import React from 'react'

function Root({ children, width, drawerOpen, ...rest }) {
  return (
    <AppBar
      sx={{
        // width: drawerOpen ? {md:'73.9vw'} : '100%',
        ml: drawerOpen ? {md:'300px'} : '0',
        transition: '.15s ease-in-out all',
      }}
      color={'primary'}
      position='static'
      variant='outlined'
      elevation={0}
    >
      <Box
        alignItems={'baseline'}
        justifyContent={'space-between'}
        display='flex'
      >
        {children}
      </Box>
    </AppBar>
  )
}

export default Root
