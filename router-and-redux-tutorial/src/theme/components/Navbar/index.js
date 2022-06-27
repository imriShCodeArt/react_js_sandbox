import { AppBar, Box, Button } from '@mui/material'
import React from 'react'
import Menu from 'components/Menu'
import Link from './components/Link'

function NavBar() {
  return (
    <AppBar color='secondary' position='sticky'>
      <Box>
        <Menu grow rootEl={<Button color={'primary'}>Categories</Button>}>
          <Link text={'Category 1'} to='cat-1' />
          <Link text={'Category 2'} to='cat-2' />
          <Link text={'Category 3'} to='cat-3' />
        </Menu>
        <Link color='primary' text={'About'} to='about' />
        <Link color='primary' text={'Contact'} to='contact' />
      </Box>
    </AppBar>
  )
}

export default NavBar
