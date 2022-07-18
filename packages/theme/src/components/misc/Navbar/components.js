import React from 'react'
const MyMenu = React.lazy(() => import('components/Menu'))
export const Menu = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyMenu {...rest}>{children}</MyMenu>
  </React.Suspense>
)

const MyLink = React.lazy(() => import('components/Link'))
export const Link = ({ text, to }) => (
  <React.Suspense fallback={<div />}>
    <MyLink text={text} to={to} />
  </React.Suspense>
)