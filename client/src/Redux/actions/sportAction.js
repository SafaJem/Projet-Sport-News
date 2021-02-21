import axios from 'axios'
import {SPORT_ERRORS,REGISTER_USER,LOGIN_USER,GET_PROFILE,USER_LOADING,GET_AUTH_USER,LOGOUT_USER,DELETED_USER} from '../constants/actionTypes'
import { Alert, AlertTitle } from '@material-ui/lab';

// Loading
const userLoading = () => (dispatch) => {
    dispatch({
      type: USER_LOADING,
    });
  };
  
 // get errors
const sportErrors=(error)=>(dispatch)=>{
    const {errors,msg}= error.response.data
if (Array.isArray(errors)){
    errors.forEach((el) => {
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>{el.msg}</strong>
      </Alert>
    });
}
if(msg){
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>msg</strong>
      </Alert>
}
    dispatch(
        {
            type:SPORT_ERRORS,
        }
    );
}  

// Register user
export const registerUser=(formData)=>async (dispatch) =>{
    dispatch(userLoading());
try{
const res= await axios.post('/api/sport/register',formData);
dispatch({
    type:REGISTER_USER,
    payload:res.data
});
}
catch (err){
    console.dir(err);
    dispatch(sportErrors(err));
}
}   

// Login user
export const loginUser=(formData)=>async (dispatch) =>{
    dispatch(userLoading());
    try{
    const res= await axios.post('/api/sport/login',formData);
    dispatch({
        type:LOGIN_USER,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(sportErrors(err));
    }
    } 
    
    // Get auth user
export const getAuthUser = () => async (dispatch) => {
    dispatch(userLoading());
    try {
      //headers
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.get('/api/sport/user', config);
      dispatch({
        type: GET_AUTH_USER,
        payload: res.data, 
      });
    } catch (err) {
        console.dir(err);
        dispatch(sportErrors(err));
        }
        } 
        
  // Logout user
  export const logout = () => (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };

  
  export const deleteAuthUser = () => async (dispatch) => {
    dispatch(userLoading());
    try {
      //headers
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.delete('/api/sport/', config);
      dispatch({
        type: DELETED_USER,
        payload: res.data, 
      });
    } catch (err) {
        console.log(err);
      
        }
        } 


        export const editAuthUser = (formData ,) => async (dispatch) => {
            dispatch(userLoading());
            try {
              //headers
              const config = {
                headers: {
                  'x-auth-token': localStorage.getItem('token'),
                },
              };
              const res = await axios.put('/api/sport/',formData ,config);
              dispatch({
                type: GET_AUTH_USER,
                payload: res.data, 
              });
            } catch (err) {
                console.log(err);
              
                }
                }    

                export const getAllUserAuth = () => async (dispatch) => {
                  dispatch(userLoading());
                  try {
                    //headers
                    const config = {
                      headers: {
                        'x-auth-token': localStorage.getItem('token'),
                      },
                    };
                    const res = await axios.get('/api/sport/');
                    dispatch({
                      type: GET_AUTH_USER,
                      payload: res.data, 
                    });
                  } catch (err) {
                      console.log(err);
                    
                      }
                      } 
              
                    