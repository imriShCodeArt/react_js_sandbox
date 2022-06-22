import React from 'react'
import { Box, Drawer as Root } from '@mui/material'
function Drawer({ open, anchor, closeAction }) {
  return (
    <Root
      BackdropProps={{ sx: { bgcolor: 'transparent' } }}
      open={open}
      anchor={anchor}
      onClose={closeAction}
    >
      <Box width={{ xs: '250px', md: '300px' }}>Hello</Box>
    </Root>
  )
}

Drawer.defaultProps = {
  open: false,
  anchor: 'left',
}

export default Drawer
