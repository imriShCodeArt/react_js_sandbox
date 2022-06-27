import React from 'react'
import { Avatar as Root, Box, Button } from '@mui/material'
import Menu from 'components/Menu'

function Avatar({ children, text, size, menuGrow }) {
  const sizeSmall = size === 'small' && {
    width:'1.50em', height:'1.50em'
  }
  const root = (
    <Button sx={{ minWidth: '0', padding: 0 }} size='small' color='secondary'>
      <Root sx={{...sizeSmall}} variant='rounded'>{text}</Root>
    </Button>
  )
  return (
    <Box alignItems={'center'} display=''>
      <Menu grow={menuGrow} dense rootEl={root} divided={3}>
        {children}
      </Menu>
    </Box>
  )
}
Avatar.defaultProps = {
  text: 'H',
}
export default Avatar
