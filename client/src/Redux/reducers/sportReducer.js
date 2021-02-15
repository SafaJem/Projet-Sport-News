import {SPORT_ERRORS,REGISTER_USER,LOGIN_USER,USER_LOADING,GET_AUTH_USER,LOGOUT_USER,DELETED_USER} from '../constants/actionTypes'

const initialState={
    token:localStorage.getItem('token'),
    user:null,
    isAuth:false,
    isLoading:false
    }
    
    const sportReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
        case REGISTER_USER:
        case LOGIN_USER:
              localStorage.setItem('token', payload.token);
              return {
                ...state,
                isLoading: false,
                isAuth: true,
                ...payload,
              };
              case GET_AUTH_USER:
                return {
                  ...state,
                  isLoading: false,
                  isAuth: true,
                  ...payload,
                };
             case LOGOUT_USER:   
             case SPORT_ERRORS :
             case DELETED_USER :
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
        export default sportReducer;    