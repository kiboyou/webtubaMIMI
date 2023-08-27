// store.js
import { configureStore } from '@reduxjs/toolkit';
import RDVReducer from './RDV/slice';
import CNReducer from './CN/slice'
import BlogReducer from './Blog/slice'

const store = configureStore({
  reducer: {
    RDV: RDVReducer,
    CN: CNReducer,
    blog: BlogReducer
  },
});

export default store;
