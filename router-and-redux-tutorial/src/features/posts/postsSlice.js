import { createSlice } from '@reduxjs/toolkit'
import myState from 'assets/myState'

export const postsSlice = createSlice({
  name: 'counter',
  initialState: myState.posts,
  reducers: {
    // getAllPosts: (state) => {
    //   state.value += 1
    // },
  },
})

// Action creators are generated for each case reducer function
export const {  } = postsSlice.actions

export default postsSlice.reducer