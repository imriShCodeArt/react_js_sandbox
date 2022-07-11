import React from 'react'
import { useSelector } from 'react-redux'

import './index.css'

import { Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const PostsSidebar = React.lazy(() => import('cards/PostsSidebar'))
const SidebarElm = () => (
  <React.Suspense fallback={<div />}>
    <PostsSidebar />
  </React.Suspense>
)

const MyTheme = React.lazy(() => import('theme/Theme'))
const Theme = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyTheme {...rest}>{children}</MyTheme>
  </React.Suspense>
)

const Post = React.lazy(() => import('cards/Post'))
const PostElm = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <Post {...rest}>{children}</Post>
  </React.Suspense>
)

const App = () => {
  const state = useSelector((state) => state)
  return (
    <Theme state={state} sidebarElm={<SidebarElm />} postElm={PostElm}>
      <Route path=':pages' element={<Page404 />} />
      <Route index element={<Home />} />
      <Route path={'about'} element={<About />} />
      <Route path={'contact'} element={<Contact />} />
    </Theme>
  )
}

export default App
