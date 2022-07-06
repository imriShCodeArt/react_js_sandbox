import {
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Avatar from 'components/Avatar'
import ButtonBase from 'components/Button/ButtonBase'

import { dateString, capitalize } from 'assets/utils'

function Post({ title, categories, authors, date }) {
  console.log(categories)
  const navigate = useNavigate()
  const theme = useTheme()
  const CategoryButton = ({ name, href }) => (
    <ButtonBase sx={{ textAlign: 'center', width: '6em' }}>
      <Link fontSize={'large'} onClick={() => navigate(`/category/${href}`)}>
        {name}
      </Link>
    </ButtonBase>
  )
  return (
    <Card>
      <Box>
        <CardHeader
          avatar={
            <AvatarGroup>
              <Avatar round>A</Avatar>
              <Avatar round>B</Avatar>
            </AvatarGroup>
          }
          titleTypographyProps={{ textTransform: 'capitalize', variant: 'h1' }}
          title={title || 'Post Name'}
          subheader={dateString(date)}
          subheaderTypographyProps={{
            variant: 'h6',
          }}
          sx={{
            height: '13em',
            transition: 'height .3s ease-in-out',
          }}
        />
        <Stack direction={'row'} width={'auto'}>
          {categories.map((i, index) => (
            <React.Fragment key={index}>
              <CategoryButton name={capitalize(i)} href={i.toLowerCase()} />
              <Typography variant='body2' color={theme.palette.primary.light}>
                |
              </Typography>
            </React.Fragment>
          ))}
        </Stack>
        <CardContent>
          <Grid container>
            <Grid item xs={12} md={8} lg={10}>
              <Typography variant='h3'>Intro</Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                est, minima, pariatur necessitatibus, cumque itaque officia
                ipsum perspiciatis possimus obcaecati maxime quod totam commodi
                beatae?
              </Typography>
              <Typography variant='h3'>Some Title</Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                est, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ad est, minima, pariatur necessitatibus, cumque itaque officia
                ipsum perspiciatis possimus obcaecati maxime quod totam commodi
                beatae?
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                est, minima, pariatur necessitatibus, cumque itaque officia
                ipsum perspiciatis possimus obcaecati maxime quod totam commodi
                beatae?
              </Typography>
            </Grid>
            <Outlet />
          </Grid>
        </CardContent>
      </Box>
    </Card>
  )
}

export default Post
