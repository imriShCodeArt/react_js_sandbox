import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Post from '../pages/Post'
import Category from '../pages/Category'

function PagesRouter({ categories }) {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog'>
          <Route index element={<Blog />} />
          <Route path=':post' element={<Post />} />
          {categories.map((c, index) => (
            <Route key={index} path={c.slug}>
              <Route index element={<Category />} />
              <Route path=':post' element={<Post />} />
            </Route>
          ))}
        </Route>
      </Routes>
    </>
  )
}

PagesRouter.defaultProps = {
  categories: [
    {
      id: 1,
      name: 'art & hystory',
      slug: 'art-and-hystory',
    },
    {
      id: 2,
      name: 'science',
      slug: 'science',
    },
  ],
}

export default PagesRouter
