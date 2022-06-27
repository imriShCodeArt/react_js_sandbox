import React from 'react'
import BlogWidget from 'cards/Blog'

import { useSelector } from 'react-redux'

function Home() {
  const posts = useSelector((state) => state.posts)
  const categories = useSelector((state) => state.categories)
  return (
      <BlogWidget categories={categories} posts={posts} />
  )
}

export default Home
