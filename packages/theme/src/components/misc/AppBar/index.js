import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Root from './Root'
import Box from '@mui/material/Box'
import { DrawerContent, MyAvatar, MyLinks, MyLogo, MyMenuButton } from './components'
import ThemeContext from '../../../assets/ThemeContext'

function AppBar({
  action,
  setDrawerContent,
  logo,
  links,
  layout,
  avatar = {},
}) {
  return (
    <Root>
      <Box
        className='Top-Navigation-Wrapper Left'
        display={'flex'}
        alignItems={'center'}
      >
        <MyMenuButton action={() => action('top', <DrawerContent/>)} />
        <MyLogo logo={logo} />
        <MyLinks links={links} />
      </Box>
      <MyAvatar />
    </Root>
  )
}
AppBar.propTypes = {
  action: PropTypes.func,
  setDrawerContent: PropTypes.func,
  logo: PropTypes.shape({
    content: PropTypes.any,
    href: PropTypes.string,
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      subLinks: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  layout: PropTypes.oneOf(['left', 'right', 'centered']),
}

AppBar.defaultProps = {
  logo: {
    content: 'LOGO',
    href: '',
  },
  links: [
    {
      text: 'Home',
      href: '',
    },
    {
      text: 'About',
      href: 'about',
    },
    {
      text: 'Contact',
      href: 'contact',
    },
  ],
  menu: undefined,
}

export default AppBar
