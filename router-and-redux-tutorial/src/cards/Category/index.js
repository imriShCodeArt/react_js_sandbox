import { Grid } from '@mui/material'
import React from 'react'
import PostWidget from '../Post'

import Heading3 from 'components/Typography/Heading/Heading3'

function Category({ posts, name }) {
  const CategoryPosts = () => {
    return posts.map((p) => (
      <Grid key={p.id} item xs={6}>
        <PostWidget key={p.id} {...p} />
      </Grid>
    ))
  }
  return (
    <Grid p={3} spacing={3} item xs={12} lg={12} container>
      <Grid item xs={12}>
        <Heading3 text={name} />
      </Grid>
      <CategoryPosts />
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
