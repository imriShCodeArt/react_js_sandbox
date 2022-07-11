import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from '@mui/material'
import { Outlet } from 'react-router-dom'

const Post = () => {
  return <Box>POST</Box>
}

function Category({ children, title, categories = [{}], posts = [{}] }) {
  const theme = useTheme()

  const currentCategory = categories.filter((i) => i.slug === title)
  const currentPosts = posts.filter((p) => {
    let hasMatch = 0
    p.categories.map((c) => {
      return c.toString().toLowerCase() === currentCategory[0].slug
        ? (hasMatch += 1)
        : {}
    })
    return hasMatch > 0 && p
  })
  const imgUrl = currentCategory[0].img
  return (
    <Card>
      <Box>
        <CardHeader
          titleTypographyProps={{
            textTransform: 'capitalize',
            variant: 'h3',
            component: 'h1',
            color: 'secondary',
          }}
          title={title || 'uncategorized'}
          subheader={'Category Page Layout'}
          subheaderTypographyProps={{
            variant: 'h2',
            color: 'secondary',
          }}
          sx={{
            backgroundImage: `linear-gradient(rgba(101,101,101,0.7)20%, rgba(21,21,21,0.7)100%), url(${imgUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '13em',
          }}
        />
        <CardContent>
          <Grid container>
            <Grid
              item
              container
              xs={12}
              md={9}
              lg={10}
              spacing={theme.spacing(1)}
              py={theme.spacing(2)}
            >
              {currentPosts.length > 0 ? (
                currentPosts.map((p, index) => (
                  <Grid key={index} item xs={4}>
                    <Post {...p} />
                  </Grid>
                ))
              ) : (
                <Typography>no posts in this category...</Typography>
              )}
            </Grid>
            {children || <Outlet />}
          </Grid>
        </CardContent>
      </Box>
    </Card>
  )
}
Category.defaultProps = {
  categoryPosts: [{}, {}, {}, {}],
}
export default Category
