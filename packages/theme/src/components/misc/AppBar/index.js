import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import Root from './Root'
import { Box, IconButton, Stack } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import ThemeContext from '../../../assets/ThemeContext'

const ImpLink = React.lazy(() => import('components/Link'))
const Link = ({ text, to }) => (
  <React.Suspense fallback={<div />}>
    <ImpLink text={text} to={to} />
  </React.Suspense>
)

function AppBar({ logo, links, layout }) {
  const { drawer, ...rest } = useContext(ThemeContext)
  const openDrawer = drawer.openDrawer
  const closeDrawer = drawer.closeDrawer

  useEffect(() => {
    openDrawer()
  }, [])

  const MyMenuButton = () => {
    return (
      <IconButton>
        <MenuIcon />
      </IconButton>
    )
  }
  const MyLogo = () =>
    logo && (
      <Box bgcolor={'transparent'}>
        <Link to={logo.href} text={logo.content} />
      </Box>
    )

  const MyLinks = () => (
    <Stack direction={'row'} spacing={'1em'}>
      {links &&
        links.map(({ text, href }, i) => (
          <Link key={i} text={text} to={href} />
        ))}
    </Stack>
  )
  return (
    <Root>
      <Box
        className='Top-Navigation-Wrapper Left'
        display={'flex'}
        alignItems={'center'}
      >
        <MyMenuButton />
        <MyLinks />
      </Box>
      <MyLogo />
    </Root>
  )
}
AppBar.propTypes = {
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
    content: <></>,
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
}

export default AppBar
