import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Card, CardContent, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
const lightBorder = '1px solid rgba(0,0,0,0.1)'

const Link = React.lazy(() => import('components/Link'))
export const MyLink = ({ text, to }) => (
  <React.Suspense fallback={<div />}>
    <Link text={text} to={to} />
  </React.Suspense>
)

const Avatar = React.lazy(() => import('components/Avatar'))
export const MyAvatar = () => (
  <React.Suspense fallback={<div />}>
    <Avatar text={'A'}>
      <Typography>item 1</Typography>
      <Typography>item 2</Typography>
    </Avatar>
  </React.Suspense>
)

export const MyMenuButton = ({ action }) => {
  return (
    action && (
      <Box borderRight={lightBorder}>
        <IconButton color='inherit' onClick={() => action('left')}>
          <MenuIcon />
        </IconButton>
      </Box>
    )
  )
}

export const MyLogo = ({ logo }) => {
  return (
    logo && (
      <Box
        borderRight={lightBorder}
        pml={{ xs: 0, md: '1em' }}
        mr={{ xs: 0, md: '2em' }}
        bgcolor={'transparent'}
      >
        <MyLink to={logo.href} text={logo.content} />
      </Box>
    )
  )
}

export const MyLinks = ({ links }) => (
  <Stack
    display={{ xs: 'none', md: 'flex' }}
    borderRight={lightBorder}
    direction={'row'}
    spacing={{ xs: 0, md: '1em' }}
  >
    {links &&
      links.map(({ text, href }, i) => (
        <MyLink key={i} text={text} to={href} />
      ))}
  </Stack>
)


export const DrawerContent = () => (
  <Card>
    <CardContent>
      <Box sx={{transition:'all ease-in-out .3s'}} height={'50vh'}>
        APPBAR
      </Box>
    </CardContent>
  </Card>
)