import Typography from '@mui/material/Typography'
import React from 'react'

function Heading4({ text, children, ...rest }) {
  return (
    <Typography component={'h4'} variant='h4' {...rest}>
      {children || text}
    </Typography>
  )
}

export default Heading4
