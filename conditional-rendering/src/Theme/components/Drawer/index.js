import React from 'react'
import { Box, Drawer as Root } from '@mui/material'
function Drawer({ open, anchor, closeAction, }) {
  return (
    <Root open={open} anchor={anchor} onClose={closeAction} >
        <Box height={'90vh'} >
            Hello
        </Box>
    </Root>
  )
}

Drawer.defaultProps = {
    open: false,
    anchor: 'top',

}

export default Drawer