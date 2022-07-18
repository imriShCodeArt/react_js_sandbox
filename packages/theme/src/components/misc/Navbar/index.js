import React, { useContext } from 'react'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import { Link, Menu } from './components'
import ThemeContext from '../../../assets/ThemeContext'

function NavBar() {
  const links = useContext(ThemeContext()).navLinks
  const ListOfLinks = () =>
    links &&
    links.map(({ text, href, subLinks }, i) => {
      const Item = !subLinks ? (
        <Link key={i} text={text} to={href} />
      ) : (
        <Menu
          key={i}
          triggerElm={
            <Typography sx={{ px: '1em' }} color={'primary'}>
              {text}
            </Typography>
          }
        >
          {subLinks.map(({ text, href, subLinks }, j) =>
            !subLinks ? (
              <Link key={i} text={text} to={href} />
            ) : (
              <Menu
                key={i}
                triggerElm={
                  <Typography sx={{ px: '1em' }} color={'primary'}>
                    {text}
                  </Typography>
                }
              >
                {subLinks.map(({ text, href }, j) => (
                  <Link key={j} text={text} to={href} />
                ))}
              </Menu>
            )
          )}
        </Menu>
      )
      return Item
    })
  return (
    <AppBar
      variant='outlined'
      elevation={0}
      color='secondary'
      position='sticky'
      component={'nav'}
    >
      <Box>
        <ListOfLinks />
      </Box>
    </AppBar>
  )
}

export default NavBar
