import { Grid } from '@mui/material'
import React from 'react'
import PostWidget from '../Post'

function Category({ posts }) {
  return (
    <Grid container>
      {posts.map((p) => (
        <PostWidget key={p.id} {...p} />
      ))}
    </Grid>
  )
}
Category.defaultProps = {
  posts: [
    {
      id: 1,
      slug: 'my-first-post',
      title: 'My First Post',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [0],
    },
  ],
}
export default Category
