import { Grid } from '@mui/material'
import React from 'react'

function Page({ children, ...rest }) {
  return (
    <Grid justifyContent={'center'} container {...rest}>
        {children}
    </Grid>
  )
}

export default Page