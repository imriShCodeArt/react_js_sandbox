import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'

import theme from 'assets/myTheme'
import AppBar from './components/misc/AppBar'
import Navbar from './components/misc/Navbar'
import Sidebar from './components/misc/Sidebar'
import Footer from './components/misc/Footer'
import Drawer from './components/misc/Drawer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Page from './components/layout/Page'
import Post from './components/layout/Post'
import Category from './components/layout/Category'

function Theme({ children, postElm, sidebarElm, state }) {
  const location = useLocation()
    .pathname.split('/')
    .filter((i) => i !== '')

  const { categories, posts } = state 

  // POST META:
  const currentPost = posts.filter(
    (p) => p.slug === location[location.length - 1]
  )

  //DRAWER PROPS:
  const [drawerOpen, setDrawerOpen] = useState(false)
  function closeDrawer() {
    setDrawerOpen(false)
  }
  function openDrawer() {
    setDrawerOpen(true)
  }

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      {/* --------------------- THEME Elements --------------------- */}
      <AppBar primaryAction={openDrawer} />
      <Navbar />

      <Routes>
        {/* --------------------- Wrong Page Display: --------------------- */}
        {/* --------------------- Pages layout: --------------------- */}
        <Route path='/*' element={<Page location={location} />}>
          {children}
        </Route>
        {/*--------------------- Posts layout: ---------------------*/}
        <Route path='entry' element={<Post {...currentPost[0]} />}>
          <Route path=':posts' element={<Sidebar element={sidebarElm} />} />
        </Route>
        <Route
          path='category'
          element={
            <Category
              postElm={postElm}
              posts={posts}
              categories={categories}
              title={location[1]}
            />
          }
        >
          <Route
            path=':categories'
            element={<Sidebar element={sidebarElm} />}
          />
        </Route>
      </Routes>

      {/* --------------------- footer section --------------------- */}
      <Footer posts={posts} />

      {/* --------------------- drawer --------------------- */}
      <Drawer open={drawerOpen} closeAction={closeDrawer} />
    </ThemeProvider>
  )
}

export default Theme
