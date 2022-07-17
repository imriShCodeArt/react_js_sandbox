import { configureStore } from '@reduxjs/toolkit'
import posts from 'features/posts/postsSlice'
import categories from 'features/categories/categoriesSlice'
export const store = configureStore({
  reducer: {
    posts,
    categories,
  },
})
