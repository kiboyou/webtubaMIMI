
import { createSlice } from '@reduxjs/toolkit';

const RDVSlice = createSlice({
  name: 'RDV',
  initialState: [],
  reducers: {
    addRDV: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addRDV } = RDVSlice.actions;
export default RDVSlice.reducer;