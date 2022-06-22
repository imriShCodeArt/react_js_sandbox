import React from 'react'

import { AppBar as Root, Box, IconButton, Typography } from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

function AppBar({ primaryAction, width, myRef }) {
  const navigate = useNavigate()
  return (
    <Root ref={myRef}
      sx={{ width: `${width}vw` }}
      color={'primary'}
      position='static'
      variant='outlined'
      elevation={0}
    >
      <Box height='2.5em' justifyContent={'space-between'} display='flex'>
        <IconButton color='secondary' onClick={primaryAction}>
          <Menu />
        </IconButton>
        <IconButton color='secondary' onClick={() => navigate('/')}>
          <Typography fontStyle={'italic'} fontWeight={700} variant='subtitle1'>
            LOGO
          </Typography>
        </IconButton>
      </Box>
    </Root>
  )
}

AppBar.defaultProps = {
  width: 100,
}

export default AppBar
