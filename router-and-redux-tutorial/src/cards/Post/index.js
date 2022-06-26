import { Card, CardHeader } from '@mui/material'
import React from 'react'

function Post({ id, slug, title, date, authors, categories, ...rest }) {
  return (
    <Card>
      <CardHeader title={title} subheader={date} />
    </Card>
  )
}

Post.defaultProps = {
  id: 1,
  slug: 'my-fisrt-post',
  title: 'My First Post',
  date: new Date().toUTCString(),
  authors: [1],
  categories: [0],
}

export default Post
