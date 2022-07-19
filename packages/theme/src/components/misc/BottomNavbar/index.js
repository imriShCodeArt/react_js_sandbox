import Category from '@mui/icons-material/Category'
import Home from '@mui/icons-material/Home'
import Info from '@mui/icons-material/Info'
import { BottomNavigation, BottomNavigationAction, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BottomNavbar() {
  const navigate = useNavigate()
  const theme = useTheme()
  return (
    <BottomNavigation 
      sx={{
        zIndex:999,
        display: { xs: 'flex', md: 'none' },
        flexWrap:'wrap',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        borderTop: `1px solid ${theme.palette.divider}`,
        boxShadow:theme.shadows['8'],
        pt:'.2em'
      }}
    >
      <BottomNavigationAction
        onClick={() => navigate('blog')}
        title='blog'
        showLabel
        label={'Blog'}
        icon={<Category />}
      />
      <BottomNavigationAction
        onClick={() => navigate('')}
        title='home'
        showLabel
        label={'Home'}
        icon={<Home />}
      />
      <BottomNavigationAction
        onClick={() => navigate('about')}
        title='about'
        showLabel
        label={'About'}
        icon={<Info />}
      />
    </BottomNavigation>
  )
}

export default BottomNavbar
