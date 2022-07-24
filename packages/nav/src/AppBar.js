import React from 'react'
import Root from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import Toolbar from '@mui/material/Toolbar'
import Avatar from './components/Avatar'
import LinksBar from './components/LinksBar'
import Logo from './components/Logo'
import MenuButton from './components/MenuButton'
import NotificationsBar from './components/NotificationsBar'
import Add from './components/Add'

function AppBar({
  hasMenuButton,
  hasLogo,
  hasLinksbar,
  hasAddButton,
  hasNotificationButton,
  HasAvatar,
  centered,
}) {
  return (
    <Root variant='outlined' position='static' elevation={0} color={'primary'}>
      <Toolbar>
        {hasMenuButton && <MenuButton />}
        {hasLogo && <Logo order={centered ? 5 : undefined} />}
        {hasLinksbar && <LinksBar links={hasLinksbar} />}
        {(hasLinksbar && centered) || (!hasLinksbar && !centered) ? (
          <Box flexGrow={2} order={10}></Box>
        ) : (
          ''
        )}
        <ButtonGroup sx={{ px: '1em', justifyContent: 'right', order: 12 }}>
          {hasAddButton && <Add />}
          {hasNotificationButton && <NotificationsBar />}
        </ButtonGroup>
        {HasAvatar && <Avatar />}
      </Toolbar>
    </Root>
  )
}

export default AppBar
