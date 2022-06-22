import { AppBar, Box } from '@mui/material'
import React from 'react'
import Link from './components/Link'

function NavBar() {
  return (
    <AppBar color='secondary' position='static'>
      <Box >
        <Link text={'Home'} to='' />
        <Link text={'About'} to='about' />
      </Box>
    </AppBar>
  )
}

export default NavBar
