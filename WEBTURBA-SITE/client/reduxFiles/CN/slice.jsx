
import { createSlice } from '@reduxjs/toolkit';


const CNSlice = createSlice({
  name: 'CN',
  initialState: [],
  reducers: {
    addCN: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCN } = CNSlice.actions;
export default CNSlice.reducer;
