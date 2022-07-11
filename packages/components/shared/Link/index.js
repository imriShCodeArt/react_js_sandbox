import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as Root } from '@mui/material'

function Link({ to, text, color, children, ...rest }) {
  const navigate = useNavigate()

  function scrollAndNav() {
    window.scrollTo(0, 0)
    navigate(`${to}`)
  }

  return (
    <Root
      color={color}
      sx={{ cursor: 'pointer', textDecoration:'none' }}
      onClick={() => scrollAndNav()}
      {...rest}
    >
      {children || text}
    </Root>
  )
}
Link.defaultProps = {
  color: 'inherit',
}
export default Link
