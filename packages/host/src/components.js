import React from 'react'

const PostsSidebar = React.lazy(() => import('cards/PostsSidebar'))
export const SidebarElm = () => (
  <React.Suspense fallback={<div />}>
    <PostsSidebar />
  </React.Suspense>
)

const MyTheme = React.lazy(() => import('theme/Theme'))
export const Theme = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyTheme {...rest}>{children}</MyTheme>
  </React.Suspense>
)

const Post = React.lazy(() => import('cards/Post'))
export const PostElm = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <Post {...rest}>{children}</Post>
  </React.Suspense>
)
