// actions.js
import axios from 'axios';
import { addCN} from './slice';

const API_URL = 'http://127.0.0.1:8000/contactez_nous/';


export const createCN = (cn) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, cn);
    dispatch(addCN(response.data));
  } catch (error) {
    console.error('Error creating cn:', error);
  }
};
