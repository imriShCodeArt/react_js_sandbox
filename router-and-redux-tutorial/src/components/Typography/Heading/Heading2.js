import Typography from '@mui/material/Typography'
import React from 'react'

function Heading2({ text, children, ...rest }) {
  return (
    <Typography variant='h2' {...rest}>
      {children || text}
    </Typography>
  )
}

export default Heading2
