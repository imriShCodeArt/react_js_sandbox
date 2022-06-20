import React from 'react'
import CategoryWidget from '../../cards/Category'
import { Box, Grid, Paper } from '@mui/material'

function Home() {
  return (
    <Grid item>
      <Paper>
        <Box minHeight={'90vh'}>
          <CategoryWidget />
        </Box>
      </Paper>
    </Grid>
  )
}

export default Home
