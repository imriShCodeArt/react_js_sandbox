import { ButtonGroup, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'

import Avatar from 'components/Avatar'
import Link from 'components/Link'

import { MoreHoriz, Twitter, Add } from '@mui/icons-material'

function Post({ id, slug, title, date, authors, categories, ...rest }) {
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={date}
        avatar={<Avatar>
          <ButtonGroup>
            <IconButton title='learn more'>
              <MoreHoriz />
            </IconButton>
            <IconButton title='folllow on twitter'>
              <Twitter />
            </IconButton>
            <IconButton title='add to favorites'>
              <Add />
            </IconButton>
          </ButtonGroup>
        </Avatar>}
      />
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
