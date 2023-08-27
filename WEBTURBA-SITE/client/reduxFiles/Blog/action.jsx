// actions.js
import axios from 'axios';
import { addBlog, allBlog } from './slice';


const API_URL = 'http://127.0.0.1:8000/blog/';


export const createBlog = (blog) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, blog);
    dispatch(addBlog(response.data));
  } catch (error) {
    console.error('Error creating blog:', error);
  }
};


export const getallBlog = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(allBlog(response.data));
  } catch (error) {
    console.error('Error in all blog:', error);
  }
};