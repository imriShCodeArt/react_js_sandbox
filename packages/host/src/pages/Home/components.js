import React from 'react'

const MyPostSliderHorizontal = React.lazy(() =>
  import('cards/PostSliderHorizontal')
)
export const PostSliderHorizontal = () => (
  <React.Suspense fallback={<div />}>
    <MyPostSliderHorizontal />
  </React.Suspense>
)
const MyPostsForCategory = React.lazy(() => import('cards/PostsForCategory'))
export const PostsForCategory = ({ ...props }) => (
  <React.Suspense fallback={<div />}>
    <MyPostsForCategory
      posts={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
      {...props}
    />
  </React.Suspense>
)

const MyAuthor = React.lazy(() => import('cards/Author'))
export const Author = ({}) => (
  <React.Suspense fallback={<div />}>
    <MyAuthor />
  </React.Suspense>
)

const MySection = React.lazy(() => import('theme/Section'))
export const Section = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MySection {...rest}>{children}</MySection>
  </React.Suspense>
)
const MyColumn = React.lazy(() => import('theme/Column'))
export const Column = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyColumn {...rest}>{children}</MyColumn>
  </React.Suspense>
)
