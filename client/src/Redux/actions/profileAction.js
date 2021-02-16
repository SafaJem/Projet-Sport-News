import axios from 'axios';
import { GET_PROFILE ,GET_ALL_PROFILES} from '../constants/actionTypes';

// Get current users profile
export const getCurrentProfile = (iduserauth) => async (dispatch) => {
    try {
      
      const res = await axios.get( ` /api/profile/me/${iduserauth}`);
  
      dispatch({
        type: GET_PROFILE,
        payload:res.data
      });
    } catch (err) {
  
       console.log(err)
     
    }
  };


  export const createProfile=(formData)=>async (dispatch) =>{
    try{
      
    const res= await axios.post('/api/profile/',formData);
    dispatch({
        type:GET_PROFILE,
        payload:res.data
    });
    }
    catch (err){
        console.log(err)

    }
    }      