import { AppBar, Button, Container } from '@mui/material'
import React from 'react'
import Menu from '../../../components/Menu'
import Link from './components/Link'

function NavBar() {
  return (
    <AppBar color='secondary' position='static'>
      <Container>
        <Menu rootEl={<Button color={'primary'}>Categories</Button>}>
          <Link color='inherit' text={'Category 1'} to='cat-1' />
          <Link color='inherit' text={'Category 2'} to='cat-2' />
          <Link color='inherit' text={'Category 3'} to='cat-3' />
        </Menu>
        <Link text={'About'} to='about' />
        <Link text={'Contact'} to='contact' />
      </Container>
    </AppBar>
  )
}

export default NavBar
