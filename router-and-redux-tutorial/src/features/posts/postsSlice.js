import { createSlice } from '@reduxjs/toolkit'
import myState from 'assets/myState'

export const postsSlice = createSlice({
  name: 'counter',
  initialState: myState.posts,
  reducers: {
    addPost: (state, action) => {
      const tmpPost = action.payload
      state.posts += tmpPost
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
