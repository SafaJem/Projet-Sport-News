import { GET_PROFILE, GET_ALL_PROFILES } from '../constants/actionTypes';

const initialState = {
  profile: null,
  profiles: [],
 
 
  
};

const profileReducer =(state=initialState,{type,payload})=>{
  

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
       
        ...payload,
        
      };
      case GET_ALL_PROFILES:
        return {
          ...state,
          profiles: payload
        };
    default:
      return state;
  }
}

export default profileReducer;    