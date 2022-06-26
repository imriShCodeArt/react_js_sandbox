import { Grid, Paper } from '@mui/material'
import React from 'react'
import Heading1 from 'components/Typography/Heading/Heading1'
import CategoryWidget from '../Category'
function BlogWidget({ posts, categories }) {
  const tmpCategory = 1
  const myPosts = posts.filter((i) => i.categories[0] === tmpCategory)
  const myPosts2 = posts.filter((i) => i.categories[0] === tmpCategory+1)
  return (
    <Grid container item xs={12} >
      <Grid xs={12} item>
        <Heading1>Blog</Heading1>
      </Grid>
        <CategoryWidget name={categories[tmpCategory].name} posts={myPosts} />
        <CategoryWidget name={categories[tmpCategory+1].name} posts={myPosts2} />
    </Grid>
  )
}

export default BlogWidget
