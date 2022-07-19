import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from 'components/Menu'
import AvatarRootElm from './AvatarRootElm'
import PropTypes from 'prop-types'

function Avatar({ children, text, small, menuNoGrow, square }) {
  const root = (
    <Button sx={{ minWidth: '0', padding: 0 }} color='secondary'>
      <AvatarRootElm square={square} small={small}>
        {text}
      </AvatarRootElm>
    </Button>
  )
  return (
    <Box alignItems={'center'}>
      <Menu nogrow={menuNoGrow} dense triggerElm={root} divided={3}>
        {children}
      </Menu>
    </Box>
  )
}
Avatar.propTypes = {
  text: PropTypes.string,
  small: PropTypes.bool,
  menuNoGrow: PropTypes.bool,
  square: PropTypes.bool,
}

Avatar.defaultProps = {
  text: 'H',
}
export default Avatar
