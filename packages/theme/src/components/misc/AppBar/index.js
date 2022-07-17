import React from 'react'

import { Box, Divider, IconButton, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Root from './Root'
const ImpLink = React.lazy(() => import('components/Link'))
const Avatar = React.lazy(() => import('components/Avatar'))

const Link = ({ text, to }) => (
  <React.Suspense fallback={<div />}>
    <ImpLink text={text} to={to} />
  </React.Suspense>
)

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
        <Avatar square>
          <Link text={'Account'} to={'account'} />
          <Link text={'Preferences'} to={'preferences'} />
          <Link text={'Settings'} to={'settings'} />
          <Divider variant='middle' />
          <Link text={'Profile'} to={'profile'} />
          <Link text={'Logout'} to={'logout'} />
        </Avatar>
      </React.Suspense>
    </Root>
  )
}

AppBar.defaultProps = {
  width: 100,
}

export default AppBar
