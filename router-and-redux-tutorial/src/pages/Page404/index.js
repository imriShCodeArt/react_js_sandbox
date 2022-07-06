import { Box, Typography } from '@mui/material'
import React from 'react'

function Page404() {
  return (
    <Box minHeight={'71vh'}>
      <Typography variant='h1'>
        404
      </Typography>
      <Typography variant='h4'>
        Wrong address...
      </Typography>
      <Typography variant='h5'>
        Navigate to a different page
      </Typography>
    </Box>
  )
}

export default Page404