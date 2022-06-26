import React from 'react'
import BlogWidget from 'cards/Blog'
import Page from '../Page'

import { useSelector } from 'react-redux'

function Home() {
  const posts = useSelector((state) => state.posts)
  const categories = useSelector((state) => state.categories)
  return (
    <Page>
      <BlogWidget categories={categories} posts={posts} />
    </Page>
  )
}

export default Home
