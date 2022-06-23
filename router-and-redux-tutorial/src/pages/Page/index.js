import { Box } from '@mui/material'
import React from 'react'

function Page({ children, ...rest }) {
  return (
    <Box {...rest}>
        {children}
    </Box>
  )
}

export default Page