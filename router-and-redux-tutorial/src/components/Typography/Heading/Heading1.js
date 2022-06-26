import Typography from '@mui/material/Typography'
import React from 'react'

function Heading1({ text, children, ...rest }) {
  return (
    <Typography variant='h1' {...rest}>
      {children || text}
    </Typography>
  )
}

export default Heading1
