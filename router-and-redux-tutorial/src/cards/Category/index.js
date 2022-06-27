import { Box, Divider, Grid } from '@mui/material'
import React from 'react'
import PostWidget from '../Post'

import Heading3 from 'components/Typography/Heading/Heading3'

function Category({ posts, name }) {
  const CategoryPosts = () => {
    return posts.map((p) => (
      <Grid key={p.id} item xs={6} md={4} xl={3}>
        <PostWidget
          key={p.id}
          {...p}
          categories={[{ name: 'Data Display', slug: 'data-display' }]}
        />
      </Grid>
    ))
  }
  return (
    <>
      <Box>
        <Heading3 text={name} />
        <Divider sx={{ my: '1em', borderBottom: 'none' }} />
        <Grid container spacing={2}>
          <CategoryPosts />
        </Grid>
      </Box>
      <Divider sx={{ my: '2em' }} variant='inset' />
    </>
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
      categories: [{ name: 'Data Display', slug: 'data-display' }],
    },
  ],
}
export default Category
