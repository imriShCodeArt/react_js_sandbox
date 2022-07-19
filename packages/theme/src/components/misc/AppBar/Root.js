import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import React from 'react'

function Root({ children, width, drawerOpen, ...rest }) {
  console.log(window.innerWidth)
  return (
    <AppBar
      sx={{
        // width: drawerOpen ? {md:'73.9vw'} : '100%',
        // ml: drawerOpen ? {md:'300px'} : '0',
        transition: '.15s ease-in-out all',
      }}
      color={'primary'}
      position='static'
      variant='outlined'
      elevation={0}
    >
      <Box
        alignItems={'center'}
        justifyContent={'space-between'}
        display='flex'
        flexWrap={'wrap'}
        minHeight={'2em'}
      >
        {children}
      </Box>
    </AppBar>
  )
}

export default Root
