import {SPORT_ERRORS,REGISTER_USER,LOGIN_USER} from '../constants/actionTypes'

const initialState={
    token:localStorage.getItem('token'),
    user:null,
    isAuth:false,
    isLoading:false
    }
    
    const authReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case REGISTER_USER:
        case LOGIN_USER:
              localStorage.setItem('token', payload.token);
              return {
                ...state,
                isLoading: false,
                isAuth: true,
                ...payload,
              };

             case SPORT_ERRORS :
             localStorage.removeItem('token')
             return{
             ...state,
             token:null,
             user:null,
             isAuth:false,
             isLoading:false
              }
              default:
                return state;
        }
        }
        export default authReducer;    