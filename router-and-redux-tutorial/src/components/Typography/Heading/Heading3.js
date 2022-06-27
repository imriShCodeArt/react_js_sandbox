import Typography from '@mui/material/Typography'
import React from 'react'

function Heading3({ text, children, ...rest }) {
  return (
    <Typography component={'h3'} variant='h3' {...rest}>
      {children || text}
    </Typography>
  )
}

export default Heading3
