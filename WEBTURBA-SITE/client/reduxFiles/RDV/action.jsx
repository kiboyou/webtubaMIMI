// actions.js
import axios from 'axios';
import { addRDV } from './slice';

const API_URL = 'http://127.0.0.1:8000/rendez_vous/';


export const createRDV = (rd) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, rd);
    dispatch(addRDV(response.data));
  } catch (error) {
    console.error('Error creating rdv:', error);
  }
};
