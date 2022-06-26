import Typography from '@mui/material/Typography'
import React from 'react'

function Heading6({ children, ...rest }) {
  return (
    <Typography variant='h6' {...rest}>
      {children}
    </Typography>
  )
}

export default Heading6
