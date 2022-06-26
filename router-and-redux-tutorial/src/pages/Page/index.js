import { Grid } from '@mui/material'
import React from 'react'

function Page({ children, ...rest }) {
  return (
    <Grid justifyContent={'center'} item xs={12} md={10} lg={8} container {...rest}>
        {children}
    </Grid>
  )
}

export default Page