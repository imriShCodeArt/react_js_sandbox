import React from 'react'

import { AppBar as Root, Box, IconButton } from '@mui/material'
import Menu from '@mui/icons-material/Menu'

function AppBar({ primaryAction, }) {
  return (
    <Root color={'primary'} position='static' variant='outlined' elevation={0} >
      <Box height='2.5em'>
          <IconButton color='secondary' onClick={primaryAction} >
              <Menu />
          </IconButton>
      </Box>
    </Root>
  )
}

export default AppBar
