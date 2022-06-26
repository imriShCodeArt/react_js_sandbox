import Typography from '@mui/material/Typography'
import React from 'react'

function Heading5({ children, ...rest }) {
  return (
    <Typography variant='h5' {...rest}>
      {children}
    </Typography>
  )
}

export default Heading5
