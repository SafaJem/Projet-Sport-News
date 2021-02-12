import axios from 'axios'
import {SPORT_ERRORS,REGISTER_USER,LOGIN_USER} from '../constants/actionTypes'
import { Alert, AlertTitle } from '@material-ui/lab';




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

export const registerUser=(formData)=>async (dispatch) =>{
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

export const loginUser=(formData)=>async (dispatch) =>{

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
