import Typography from '@mui/material/Typography'
import React from 'react'

function Heading3({ children, ...rest }) {
  return (
    <Typography variant='h3' {...rest}>
      {children}
    </Typography>
  )
}

export default Heading3
