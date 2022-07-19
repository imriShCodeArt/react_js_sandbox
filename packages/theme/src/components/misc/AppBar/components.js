import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

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

export const MyMenuButton = ({ action, borderStyle }) => {
  return (
    action && (
      <Box borderRight={borderStyle}>
        <IconButton onClick={() => action('left')}>
          <MenuIcon />
        </IconButton>
      </Box>
    )
  )
}

export const MyLogo = ({ logo, borderStyle }) => {
  return (
    logo && (
      <Box
        borderRight={borderStyle}
        pml={{xs:0,md:'1em'}}
        mr={{xs:0,md:'2em'}}
        bgcolor={'transparent'}
      >
        <MyLink to={logo.href} text={logo.content} />
      </Box>
    )
  )
}

export const MyLinks = ({ borderStyle, links }) => (
  <Stack display={{xs:'none', md:'flex'}} borderRight={borderStyle} direction={'row'} spacing={{xs:0,md:'1em'}}>
    {links &&
      links.map(({ text, href }, i) => (
        <MyLink key={i} text={text} to={href} />
      ))}
  </Stack>
)
