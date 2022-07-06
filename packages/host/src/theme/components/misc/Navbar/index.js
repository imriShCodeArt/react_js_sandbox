import { AppBar, Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Menu = React.lazy(() => import('components/Menu'))
const Link = React.lazy(() => import('components/Link'))

function NavBar({ drawerOpen }) {
  const navigate = useNavigate()
  return (
    <AppBar
      sx={{
        // width: drawerOpen ? {xs:'77vw', md:'73.9vw'} : '100%',
        ml: drawerOpen ? { xs: undefined, md: '300px' } : '0',
        transition: '.15s ease-in-out all',
      }}
      variant='outlined'
      elevation={0}
      color='secondary'
      position='sticky'
    >
      <Box>
        <React.Suspense fallback={<div />}>
          <Link nav={navigate} color='primary' text={'Home'} to={''} />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <Menu grow rootEl={<Button color={'primary'}>Categories</Button>}>
            <React.Suspense fallback={<div />}>
              <Link nav={navigate} text={'Science'} to='category/science' />
            </React.Suspense>
            <React.Suspense fallback={<div />}>
              <Link nav={navigate} text={'Nature'} to='category/nature' />
            </React.Suspense>
            <React.Suspense fallback={<div />}>
              <Link nav={navigate} text={'Space'} to='category/space' />
            </React.Suspense>
          </Menu>
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <Link nav={navigate} color='primary' text={'About'} to='about' />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <Link nav={navigate} color='primary' text={'Contact'} to='contact' />
        </React.Suspense>
        <React.Suspense fallback={<div />}>
          <Link
            nav={navigate}
            color='primary'
            text={'404'}
            to='wrong_address'
          />
        </React.Suspense>
      </Box>
    </AppBar>
  )
}

export default NavBar
