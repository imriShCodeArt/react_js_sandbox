import { Box, Container } from '@mui/material'
import React from 'react'

const MyPostSliderHorizontal = React.lazy(() =>
  import('cards/PostSliderHorizontal')
)
const PostSliderHorizontal = () => (
  <React.Suspense fallback={<div />}>
    <MyPostSliderHorizontal />
  </React.Suspense>
)
const MyPostsForCategory = React.lazy(() => import('cards/PostsForCategory'))
const PostsForCategory = ({ ...props }) => (
  <React.Suspense fallback={<div />}>
    <MyPostsForCategory {...props} />
  </React.Suspense>
)

const MyAuthors = React.lazy(() => import('cards/Authors'))
const Authors = ({}) => (
  <React.Suspense fallback={<div />}>
    <MyAuthors />
  </React.Suspense>
)
function Home() {
  return (
    <Box>
      <Container>
        <PostSliderHorizontal />
      </Container>
      <Container>
        <PostsForCategory
          categoryName={'Science'}
          posts={[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ]}
        />
      </Container>
      <Container>
        <PostsForCategory
          categoryName={'Nature'}
          flipDirection
          posts={[{}, {}, {}, {}, {}, {}, {}, {},{}]}
        />
      </Container>
      <Container>
        <Authors />
      </Container>
    </Box>
  )
}

export default Home
