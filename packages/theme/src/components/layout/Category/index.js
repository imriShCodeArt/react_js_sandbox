import React from 'react'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Outlet } from 'react-router-dom'

function Category({ children, title, postElm, posts, categories }) {
  console.log(postElm)
  const theme = useTheme()
  const Post = ({ children, ...props }) => postElm({ children, ...props })

  const currentCategory =
    categories && categories.filter((i) => i.slug === title)

  const currentPosts =
    posts &&
    categories &&
    posts.filter((p) => {
      let hasMatch = 0
      p.categories.map((c) => {
        return c.toString().toLowerCase() === currentCategory[0].slug
          ? (hasMatch += 1)
          : {}
      })
      return hasMatch > 0 && p
    })

  const imgUrl = currentCategory && currentCategory[0].img

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
              {currentPosts && currentPosts.length > 0 ? (
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
