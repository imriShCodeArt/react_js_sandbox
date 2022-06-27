import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'

import Avatar from 'components/Avatar'
import Link from 'components/Link'

import { MoreHoriz, Twitter, Add } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Post({
  id,
  slug,
  title,
  date,
  authors,
  categories,
  content,
  ...rest
}) {
  const navigate = useNavigate()
  const MyAvatar = () => (
    <Avatar>
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
    </Avatar>
  )
  return (
    <Card elevation={3}>
      <CardHeader
        sx={{
          transition: '.3s ease-in-out all',
          '&:hover': { cursor: 'pointer', bgcolor: '#f7f7f7' },
        }}
        titleTypographyProps={{
          sx: {
            '&:hover': { cursor: 'pointer' },
          },
          onClick: () => navigate(`entry/${slug}`),
        }}
        subheaderTypographyProps={{
          sx: {
            '&:hover': { cursor: 'pointer' },
          },
          onClick: () => navigate(`entry/${slug}`),
        }}
        title={title}
        subheader={date}
        avatar={<MyAvatar />}
      />
      <CardContent
        sx={{
          transition: '.3s ease-in-out all',
          '&:hover': { cursor: 'pointer', bgcolor: '#f7f7f7' },
        }}
        onClick={() => navigate(`entry/${slug}`)}
      >
        <Typography>{content.slice(0, 120)}...</Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Link color='info' to={`entry/${slug}`} text={'Read more'} />
        <Link
          color='info'
          to={`category/${categories[0].slug}`}
          text={`More from ${categories[0].name}`}
        />
      </CardActions>
    </Card>
  )
}

Post.defaultProps = {
  id: 1,
  slug: 'my-fisrt-post',
  title: 'My First Post',
  date: new Date().toUTCString(),
  authors: [1],
  categories: [{ name: 'Data Display', slug: 'data-display' }],
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id est qui voluptatibus blanditiis optio accusamus distinctio eveniet! Atque maxime, dolorum perferendis ullam labore aliquid ipsam velit ex iure ipsum similique nemo dolorem rerum modi illum a architecto assumenda consequuntur suscipit odio tenetur. Impedit iure aperiam magni laudantium aut suscipit.',
}

export default Post
