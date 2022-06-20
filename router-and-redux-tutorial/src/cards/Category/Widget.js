import { Grid } from '@mui/material'
import React from 'react'

import PostWidget from '../Post'

function Widget({ posts }) {
  const PostsFromCategory = () =>
    posts.map((p, index) => (
      <Grid key={index} item lg={3} md={4} xs={12}>
        <PostWidget />
      </Grid>
    ))

  return (
    <Grid container justifyContent={'space-between'} gap={{xs:2, md:0}}>
      <PostsFromCategory />
    </Grid>
  )
}

Widget.defaultProps = {
  posts: [{}, {}, {}, {}],
}

export default Widget
