import React from 'react'

import { AppBar as Root, Button, Link, Stack } from '@mui/material'

function Navbar({ links }) {
  const NavbarLink = ({ text, href }) => {
    return (
      <Button sx={{ px: 3 }}>
        <Link href={href}>{text}</Link>
      </Button>
    )
  }

  return (
    <Root component={'nav'} color='secondary' position='static' variant='outlined' elevation={0} >
      <Stack direction={'row'} height={'1.5em'} bgcolor={'inherit'}>
        {links.map(({ text, href }, index) => (
          <NavbarLink key={index} text={text} href={href} />
        ))}
      </Stack>
    </Root>
  )
}

Navbar.defaultProps = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ],
}

export default Navbar
