import { createSlice } from '@reduxjs/toolkit'
import myState from 'assets/myState'

export const categoriesSlice = createSlice({
  name: 'counter',
  initialState: myState.categories,
  reducers: {
    addCategory: (state, action) => {
      const tmpPost = action.payload
      state.categories += tmpPost
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory } = categoriesSlice.actions

export default categoriesSlice.reducer
