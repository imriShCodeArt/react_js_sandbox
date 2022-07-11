import React from 'react'
import Grid from '@mui/material/Grid'

import Post from 'cards/Post'

const MyTitle = React.lazy(() => import('components/WidgetHeading'))
const MySubTitle = React.lazy(() => import('components/SubHeading'))

function PostsForCategory({
  categoryName,
  posts = [{}, {}, {}, {}, {}, {}, {}],
  flipDirection,
}) {
  const Title = ({ text }) => (
    <React.Suspense fallback={<div />}>
          <MyTitle display={'inline-block'} text={text} />
        </React.Suspense>
  )
  const SubTitle = ({ text, ...rest }) => (
    <React.Suspense fallback={<div />}>
      <MySubTitle display={'inline-block'} text={text} {...rest} />
    </React.Suspense>
  )
  
  const MyLink = React.lazy(() => import('components/Link'))
  const Link = ({ to, children }) => (
    <React.Suspense fallback={<div />}>
      <MyLink to={`/category/${to.toLowerCase()}`}>
        {children}
      </MyLink>
    </React.Suspense>
  )
  return (
    <Grid
      container
      spacing={'1em'}
      flexDirection={flipDirection ? 'row-reverse' : 'row'}
    >
      <Grid item xs={12} md={3} mt={'2em'}>
        <Link to={categoryName.toString().toLowerCase()}>
        <Title text={categoryName + ' '} />
        <SubTitle
          textTransform={'uppercase'}
          text={`(${posts.length} posts)`}
          />
          </Link>
      </Grid>
      {posts.map(
        (p, index) =>
          index < 7 && (
            <Grid key={index} item xs={6} md={3}>
              <Post short />
            </Grid>
          )
      )}
    </Grid>
  )
}

export default PostsForCategory
