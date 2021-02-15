import axios from 'axios';

import { GET_IMAGE } from "../constants/actionTypes";

export const getImage = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/image/');
  
      dispatch({
        type: GET_IMAGE,
        payload:res.data
      });
    } catch (err) {
  
       console.log(err)
     
    }
  };

export const createImage=(formData)=>async (dispatch) =>{
    try{
    const res= await axios.post('/api/image/',formData);
    dispatch({
        type:GET_IMAGE,
        payload:res.data
    });
    }
    catch (err){
        console.log(err)

    }
    }
