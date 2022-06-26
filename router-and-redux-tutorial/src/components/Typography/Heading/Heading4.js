import Typography from '@mui/material/Typography'
import React from 'react'

function Heading4({ children, ...rest }) {
  return (
    <Typography variant='h4' {...rest}>
      {children}
    </Typography>
  )
}

export default Heading4
