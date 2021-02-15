import { GET_PROFILE } from '../constants/actionTypes';

const initialState = {
  profile: null,
  profiles: []
 
  
};

const profileReducer =(state=initialState,{type,payload})=>{
  

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        
      };
    default:
      return state;
  }
}

export default profileReducer;    