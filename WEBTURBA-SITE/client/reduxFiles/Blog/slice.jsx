
import { createSlice } from '@reduxjs/toolkit';

const BlogSlice = createSlice({
  name: 'Blog',
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    allBlog: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBlog, allBlog } = BlogSlice.actions;
export default BlogSlice.reducer;

