import axios from 'axios';
import { GET_PROFILE } from '../constants/actionTypes';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/profile/me');
  
      dispatch({
        type: GET_PROFILE,
        payload:res.data
      });
    } catch (err) {
  
       console.log(err)
     
    }
  };


  export const createProfile=(idImage,formData)=>async (dispatch) =>{
    try{
    const res= await axios.post(`/api/profile/:${idImage}`,formData);
    dispatch({
        type:GET_PROFILE,
        payload:res.data
    });
    }
    catch (err){
        console.log(err)

    }
    } 

  