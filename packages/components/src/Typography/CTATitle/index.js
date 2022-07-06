import Typography from '@mui/material/Typography'
import React from 'react'

function CTATitle({ text, children, ...rest }) {
  return (
    <Typography color={'#FFF'} component={'h4'} variant='h4' {...rest}>
      {children || text}
    </Typography>
  )
}

export default CTATitle
