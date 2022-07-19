import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Root from './Root'
import { Box } from '@mui/material'
import { MyAvatar, MyLinks, MyLogo, MyMenuButton } from './components'
const lightBorder = '1px solid rgba(0,0,0,0.1)'

function AppBar({ action, logo, links, layout, avatar = {} }) {
  return (
    <Root>
      <Box
        className='Top-Navigation-Wrapper Left'
        display={'flex'}
        alignItems={'center'}
      >
        <MyMenuButton borderStyle={lightBorder} action={action} />
        <MyLogo borderStyle={lightBorder} logo={logo} />
        <MyLinks borderStyle={lightBorder} links={links} />
      </Box>
      <MyAvatar />
    </Root>
  )
}
AppBar.propTypes = {
  menu: PropTypes.shape({ action: PropTypes.func }),
  drawer: PropTypes.shape({
    anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    variant: PropTypes.oneOf(['temporary', 'permanent', 'persistant']),
    content: PropTypes.element,
    open: PropTypes.func,
  }),
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
  drawer: {
    anchor: 'left',
    variant: 'temporary',
    content: <>APPBAR</>,
  },
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
