import React from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Root from './Root'
const Link = React.lazy(() => import('components/Link'))
const Avatar = React.lazy(() => import('components/Avatar'))

function AppBar({ primaryAction, drawerOpen, ...rest }) {
  const navigate = useNavigate()
  return (
    <Root drawerOpen={drawerOpen}>
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
      <React.Suspense fallback={<div />}>
        <Avatar menuGrow>
          <React.Suspense fallback={<div />}>
            <Link text={'Account'} to={'account'} />
          </React.Suspense>
          <React.Suspense fallback={<div />}>
            <Link text={'Preferences'} to={'preferences'} />
          </React.Suspense>
          <React.Suspense fallback={<div />}>
            <Link text={'Settings'} to={'settings'} />
          </React.Suspense>
          <React.Suspense fallback={<div />}>
            <Link text={'Profile'} to={'profile'} />
          </React.Suspense>
          <React.Suspense fallback={<div />}>
            <Link text={'Logout'} to={'logout'} />
          </React.Suspense>
        </Avatar>
      </React.Suspense>
    </Root>
  )
}

AppBar.defaultProps = {
  width: 100,
}

export default AppBar
