import React from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Root from './Root'
import Avatar from 'components/Avatar'
import Link from 'components/Link'

function AppBar({ primaryAction, ...rest }) {
  const navigate = useNavigate()
  return (
    <Root>
      <Box>
        <IconButton color='secondary' onClick={() => primaryAction()}>
          <MenuIcon />
        </IconButton>
        <IconButton color='secondary' onClick={() => navigate('')}>
          <Typography fontStyle={'italic'} fontWeight={700} variant='subtitle1'>
            LOGO
          </Typography>
        </IconButton>
      </Box>
      <Avatar menuGrow >
        <Link text={'Account'} to={'account'} />
        <Link text={'Preferences'} to={'preferences'} />
        <Link text={'Settings'} to={'settings'} />
        <Link text={'Profile'} to={'profile'} />
        <Link text={'Logout'} to={'logout'} />
      </Avatar>
    </Root>
  )
}

AppBar.defaultProps = {
  width: 100,
}

export default AppBar
