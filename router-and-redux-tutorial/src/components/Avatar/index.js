import React from 'react'
import { Avatar as Root, Button } from '@mui/material'
function Avatar({ children, text }) {
  return (
    <Button sx={{ minWidth: '0', padding: 0 }} size='small' color='secondary'>
      <Root variant='rounded'>{children || text}</Root>
    </Button>
  )
}
Avatar.defaultProps = {
  text: 'H',
}
export default Avatar
