import React from 'react'

import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

import { ChevronRight as RightIcon } from '@mui/icons-material'

function ArrowRight({ height, moveHoriz, disabled, action }) {
  return (
    <Box
      position={'absolute'}
      right={'3em'}
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
            right: `${12 - moveHoriz * -1}px`,
            transition: 'all .3s ease-in-out',
          }}
        >
          <RightIcon />
        </Fab>
      </Box>
    </Box>
  )
}

export default ArrowRight
