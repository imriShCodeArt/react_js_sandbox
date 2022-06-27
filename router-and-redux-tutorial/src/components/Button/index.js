import React from 'react'
import { Button as Root } from '@mui/material'
function Button({ text, action, color, children, contrast, small, ...rest }) {
  return (
    <Root size={small && 'small'} variant='contained' onClick={action} color={contrast ? 'secondary' : color} >
      {children || text || 'Click'}
    </Root>
  )
}

export default Button
