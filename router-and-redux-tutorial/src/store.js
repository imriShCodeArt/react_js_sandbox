import { configureStore } from '@reduxjs/toolkit'
import posts from 'features/posts/postsSlice'
export const store = configureStore({
  reducer: {
    posts,
  },
})
