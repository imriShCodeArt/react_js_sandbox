import React from 'react'
import { Box, IconButton } from '@mui/material'
import Notifications from '@mui/icons-material/Notifications'

function NotificationsBar() {
  return (
    <IconButton color={'inherit'} variant={'text'}>
      <Notifications />
    </IconButton>
  )
}

export default NotificationsBar
