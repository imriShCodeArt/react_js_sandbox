import Typography from '@mui/material/Typography'
import React from 'react'

function Heading2({ children, ...rest }) {
  return (
    <Typography variant='h2' {...rest}>
      {children}
    </Typography>
  )
}

export default Heading2
