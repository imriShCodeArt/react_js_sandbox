import React from 'react'

import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

import { ChevronLeft as LeftIcon } from '@mui/icons-material'

function ArrowLeft({ height, moveHoriz, disabled, action }) {
  return (
    <Box
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      minHeight={height}
    >
      {' '}
      <Box position={'absolute'}>
        <Fab
          disabled={disabled}
          onClick={action}
          sx={{
            position: 'absolute',
            left: `${moveHoriz * -1}px`,
            transition: 'all .3s ease-in-out',
          }}
        >
          <LeftIcon />
        </Fab>
      </Box>
    </Box>
  )
}

export default ArrowLeft
