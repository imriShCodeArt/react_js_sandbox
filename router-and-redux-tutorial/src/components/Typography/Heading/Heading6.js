import Typography from '@mui/material/Typography'
import React from 'react'

function Heading6({ text, children, ...rest }) {
  return (
    <Typography variant='h6' {...rest}>
      {children || text}
    </Typography>
  )
}

export default Heading6
