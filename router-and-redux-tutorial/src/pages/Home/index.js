import React from 'react'
import BlogWidget from 'cards/Blog'
import Page from '../Page'

import { useSelector } from 'react-redux'

function Home() {
  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <Page>
      <BlogWidget />
    </Page>
  )
}

export default Home
