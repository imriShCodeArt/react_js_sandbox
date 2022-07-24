import React from 'react'

import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

function MenuButton() {
  return (
    <Button sx={{order:0}} color='inherit' variant='text'>
        <MenuIcon />
    </Button>
  )
}

export default MenuButton