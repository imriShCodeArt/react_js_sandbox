import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Widget({
  title,
  subHeader,
  excerpt,
  slug,
  date,
  authors,
  categories,
  space,
}) {
  const [linkTo, setLinkTo] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    console.log(linkTo)
  }, [linkTo])

  return (
    <Box padding={space || 1}>
      <Card
        elevation={4}
        onMouseEnter={() => {
          setLinkTo(`${categories[0]}/${slug}`)
        }}
        onMouseLeave={() => {
          setLinkTo({})
        }}
      >
        <CardHeader
          title={title}
          subheader={categories.map((c, index) => (
            <Typography
              sx={{ cursor: 'pointer' }}
              color='primary'
              key={index}
              variant='caption'
              onMouseEnter={() => {
                setLinkTo(`${c}`)
              }}
              onMouseLeave={() => {
                setLinkTo(`${categories[0]}/${slug}`)
              }}
              onClick={() => navigate(linkTo)}
            >
              {`${c} ${index < categories.length - 1 ? ' | ' : ''}`}
            </Typography>
          ))}
          avatar={<Avatar>I</Avatar>}
        />
        <CardActionArea onClick={() => navigate(linkTo)}>
          <CardContent>
            <Typography variant='body-1'>{excerpt}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

Widget.defaultProps = {
  title: 'Post - 1',
  slug: 'post-1',
  subHeader: 'This is a random post',
  excerpt:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est eveniet voluptas labore quasi, culpa quo laudantium delectus id quod.',
  categories: ['uncategorized', '1'],
}

export default Widget
