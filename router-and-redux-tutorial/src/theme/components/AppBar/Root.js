import { AppBar, Box } from '@mui/material'
import React from 'react'

function Root({ children, width, ...rest }) {
  return (
    <AppBar
      sx={{ width: `${width}vw` }}
      color={'primary'}
      position='static'
      variant='outlined'
      elevation={0}
    >
      <Box alignItems={'baseline'} justifyContent={'space-between'} display='flex'>
        {children}
      </Box>
    </AppBar>
  )
}

export default Root
