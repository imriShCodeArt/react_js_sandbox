import { AppBar, Box, Button } from '@mui/material'
import React from 'react'
const Menu = React.lazy(() => import('components/Menu'))
const ImpLink = React.lazy(() => import('components/Link'))

const Link = ({ text, to }) => (
  <React.Suspense fallback={<div />}>
    <ImpLink text={text} to={to} />
  </React.Suspense>
)
function NavBar({ drawerOpen }) {
  return (
    <AppBar
      variant='outlined'
      elevation={0}
      color='secondary'
      position='sticky'
    >
      <Box>
        <Link color='primary' text={'Home'} to={''} />
        <React.Suspense fallback={<div />}>
          <Menu grow rootEl={<Button color={'primary'}>Categories</Button>}>
            <Link text={'Science'} to='category/science' />
            <Link text={'Nature'} to='category/nature' />
            <Link text={'Space'} to='category/space' />
          </Menu>
        </React.Suspense>
        <Link color='primary' text={'About'} to='about' />
        <Link color='primary' text={'Contact'} to='contact' />
        <Link color='primary' text={'404'} to='wrong_address' />
      </Box>
    </AppBar>
  )
}

export default NavBar
