import { Grid, useTheme } from '@mui/material'
import React from 'react'

function Sidebar({ element }) {
  const theme = useTheme()
  return (
    <Grid
      item
      xs={12}
      md={3}
      lg={2}
      mt={{ md: theme.spacing(8) }}
      pl={theme.spacing(4)}
    >
      {element}
    </Grid>
  )
}

export default Sidebar
