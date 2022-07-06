import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'

import theme from 'assets/myTheme'
import AppBar from './components/misc/AppBar'
import Navbar from './components/misc/Navbar'
import Sidebar from './components/misc/Sidebar'
import Footer from './components/misc/Footer'
import Drawer from './components/misc/Drawer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Page from './components/layout/Page'
import Post from './components/layout/Post'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Page404 from '../pages/Page404'
import Category from './components/layout/Category'
import { useSelector } from 'react-redux'
import PostsSidebar from 'cards/PostsSidebar'
import CategoriesSidebar from 'cards/CategoriesSidebar'

function Theme({}) {
  const location = useLocation()
    .pathname.split('/')
    .filter((i) => i !== '')

  const [pageTitle, setPageTitle] = useState()
  const updatePageTitle = () =>
    setPageTitle(location.length === 1 && location[0])

  const categories = useSelector(state => state.categories)

  // POST META:
  const currentPost = useSelector((state) => state.posts).filter(
    (p) => p.slug === location[location.length - 1]
  )

  // HEADER PROPS:
  const [highHeader, setHighHeader] = useState(location.length === 0 && true)
  const updateHeader = () => setHighHeader(location.length === 0 ? true : false)

  // LOCATION EFFECTS:
  useEffect(() => {
    updatePageTitle()
    updateHeader()
  }, [location])

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
        <Route path=':pages' element={<Page404 />} />
          <Route index element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'contact'} element={<Contact />} />
        </Route>
        {/*--------------------- Posts layout: ---------------------*/}
        <Route path='entry' element={<Post {...currentPost[0]} />}>
          <Route path=':posts' element={<Sidebar element={<PostsSidebar />} />} />
        </Route>
        <Route path='category' element={<Category title={location[1]} />}>
          <Route path=':categories' element={<Sidebar element={<CategoriesSidebar items={categories} />} />} />
        </Route>
      </Routes>

      {/* --------------------- footer section --------------------- */}
      <Footer />

      {/* --------------------- drawer --------------------- */}
      <Drawer open={drawerOpen} closeAction={closeDrawer} />
    </ThemeProvider>
  )
}

export default Theme
