import React from 'react'

import { Avatar, Box, IconButton, Typography } from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import Root from './Root'

function AppBar({ primaryAction, ...rest }) {
  const navigate = useNavigate()
  return (
    <Root>
      <Box>
        <IconButton color='secondary' onClick={() => primaryAction}>
          <Menu />
        </IconButton>
        <IconButton color='secondary' onClick={() => navigate('')}>
          <Typography fontStyle={'italic'} fontWeight={700} variant='subtitle1'>
            LOGO
          </Typography>
        </IconButton>
      </Box>
      <Box>
        <Avatar>A</Avatar>
      </Box>
    </Root>
  )
}

AppBar.defaultProps = {
  width: 100,
}

export default AppBar
