import { AppBar, Box, Button } from '@mui/material'
import React from 'react'
import Menu from 'components/Menu'
import Link from 'components/Link'

function NavBar({ drawerOpen, }) {
  return (
    <AppBar sx={{
      // width: drawerOpen ? {xs:'77vw', md:'73.9vw'} : '100%',
      ml: drawerOpen ? {xs:undefined, md:'300px'} : '0',
      transition: '.15s ease-in-out all',
    }} variant='outlined' elevation={0} color='secondary' position='sticky'>
      <Box>
        <Link color='primary' text={'Home'} to={''} />
        <Menu grow rootEl={<Button color={'primary'}>Categories</Button>}>
          <Link text={'Science'} to='category/science' />
          <Link text={'Nature'} to='category/nature' />
          <Link text={'Space'} to='category/space' />
        </Menu>
        <Link color='primary' text={'About'} to='about' />
        <Link color='primary' text={'Contact'} to='contact' />
        <Link color='primary' text={'404'} to='wrong_address' />
      </Box>
    </AppBar>
  )
}

export default NavBar
