import React from 'react'
import CategoryWidget from '../Category'
function BlogWidget({ posts, categories }) {
  const tmpCategory = 1
  const myPosts = posts.filter((i) => i.categories[0] === tmpCategory)
  const myPosts2 = posts.filter((i) => i.categories[0] === tmpCategory + 1)
  return (
    <>
      <CategoryWidget name={categories[tmpCategory].name} posts={myPosts} />
      <CategoryWidget
        name={categories[tmpCategory + 1].name}
        posts={myPosts2}
      />
    </>
  )
}

export default BlogWidget
