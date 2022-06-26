import Typography from '@mui/material/Typography'
import React from 'react'

function Heading5({ text, children, ...rest }) {
  return (
    <Typography variant='h5' {...rest}>
      {children || text }
    </Typography>
  )
}

export default Heading5
