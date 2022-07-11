import React from 'react'
import Grid from '@mui/material/Grid'

function Column({ children, ...props }) {
  return (
    <Grid className='Column' item {...props}  >
      {children}
    </Grid>
  )
}

export default Column
