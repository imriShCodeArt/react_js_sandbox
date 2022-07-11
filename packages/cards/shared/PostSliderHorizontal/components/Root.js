import React from 'react'

import Box from '@mui/material/Box'

function Root({ children, height, index }) {
  return (
    <Box
      height={height}
      maxWidth={'98.5vw'}
      px={'4em'}
      display={'flex'}
      flexWrap='nowrap'
      position={'relative'}
      left={`${0 + index}px`}
      verticalAlign={'center'}
      sx={{
        transition: 'all .3s ease-in-out',
      }}
    >
      {children}
    </Box>
  )
}
export default Root
