import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import React from 'react'
import Typography from '@mui/material/Typography'

const MyMenu = React.lazy(() => import('components/Menu'))
const Menu = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyMenu {...rest}>{children}</MyMenu>
  </React.Suspense>
)

const MyLink = React.lazy(() => import('components/Link'))
const Link = ({ text, to }) => (
  <React.Suspense fallback={<div />}>
    <MyLink text={text} to={to} />
  </React.Suspense>
)
function NavBar({}) {
  return (
    <AppBar
      variant='outlined'
      elevation={0}
      color='secondary'
      position='sticky'
      component={'nav'}
    >
      <Box>
        <Link color='primary' text={'Home'} to={''} />
        <React.Suspense fallback={<div />}>
          <Menu
            triggerElm={<Typography color={'primary'}>Categories</Typography>}
          >
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
