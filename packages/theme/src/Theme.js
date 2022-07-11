import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'

import theme from 'assets/myTheme'
import AppBar from './components/misc/AppBar'
import Navbar from './components/misc/Navbar'
import Sidebar from './components/misc/Sidebar'
import Footer from './components/misc/Footer'
import Drawer from './components/misc/Drawer'
import { Route, Routes } from 'react-router-dom'
import Page from './components/layout/Page'
import Post from './components/layout/Post'
import Category from './components/layout/Category'

function Theme({
  children,
  sidebarElm,
  location,
  pageTitle,
  categories,
  highHeader,
  posts,
}) {
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
        <Route
          path='/*'
          element={<Page title={pageTitle} highHeader={highHeader} />}
        >
          {children}
        </Route>
        {/*--------------------- Posts layout: ---------------------*/}
        <Route path='entry' element={<Post {...currentPost[0]} />}>
          <Route path=':posts' element={<Sidebar element={sidebarElm} />} />
        </Route>
        <Route path='category' element={<Category posts={posts} title={location[1]} />}>
          <Route
            path=':categories'
            element={<Sidebar element={sidebarElm} />}
          />
        </Route>
      </Routes>

      {/* --------------------- footer section --------------------- */}
      <Footer />

      {/* --------------------- drawer --------------------- */}
      <Drawer open={drawerOpen} closeAction={closeDrawer} />
    </ThemeProvider>
  )
}

Theme.defaultProps = {
    posts:[{}]
}

export default Theme
