import Typography from '@mui/material/Typography'
import React from 'react'

function Heading1({ children, ...rest }) {
  return (
    <Typography variant='h1' {...rest}>
      {children}
    </Typography>
  )
}

export default Heading1
