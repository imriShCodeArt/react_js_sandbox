import React from 'react'
import Grid from '@mui/material/Grid'

function Section({ children }) {
  return (
    <Grid
      container
      component={'section'}
      className={`Article_Section Section`}
      p={'2em 4em'}
    >
      {children}
    </Grid>
  )
}

export default Section
