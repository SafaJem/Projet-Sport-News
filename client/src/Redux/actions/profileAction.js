import axios from 'axios';
import { GET_PROFILE ,GET_ALL_PROFILES} from '../constants/actionTypes';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
     'x-auth-token': localStorage.getItem('token'),
    },
  };
  try {
      const res = await axios.get( '/api/profile/me',config);
  
      dispatch({
        type: GET_PROFILE,
        payload:res.data
      });
    } catch (err) {
  
       console.log(err)
     
    }
  };


  export const createProfile=(formData)=>async (dispatch) =>{
    const config = {
      headers: {
        'Content-Type': 'application/json',
       'x-auth-token': localStorage.getItem('token'),
      },
    };
    try{
      
    const res= await axios.post('/api/profile/',formData,config);
    dispatch({
        type:GET_PROFILE,
        payload:res.data
    });
    }
    catch (err){
        console.log(err)

    }
    }      