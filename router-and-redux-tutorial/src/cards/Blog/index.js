import { Grid } from '@mui/material'
import React from 'react'
import Heading1 from 'components/Typography/Heading/Heading1'
import CategoryWidget from '../Category'
function BlogWidget() {
  return (
    <Grid item xs={12} md={10} lg={8}>
      <Heading1>Blog</Heading1>
      <CategoryWidget />
    </Grid>
  )
}

export default BlogWidget
