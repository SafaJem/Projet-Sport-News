import axios from 'axios'
import * as artTypes from '../constants/articleActionTypes'
import { Alert, AlertTitle } from '@material-ui/lab';




const articleError=(error)=>(dispatch)=>{
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
            type:artTypes.ARTICLE_ERRORS,
        }
    );
}  

export const addArticle=(formData)=>async (dispatch) =>{
try{
const res= await axios.post('/api/article/articles',formData);
dispatch({
    type:artTypes.ADD_ARTICLE,
    payload:res.data
});
}
catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
}   
export const getArticle=()=>async (dispatch) =>{
    try{
    const res= await axios.get('/api/article');
    dispatch({
        type:artTypes.GET_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
        console.dir(err);
        dispatch(articleError(err));
        }
    }   
export const addImage=(formData)=>async (dispatch) =>{
    try{
    const res= await axios.post('/api/image',formData);
    dispatch({
        type:artTypes.ADD_IMAGE, 
        payload:res.data
    });
    }
    catch (err){
        console.dir(err);
        dispatch(articleError(err));
        }
    }   
export const editArticle=(formData,idArticle)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/edit/${idArticle}`,formData);
    dispatch({
        type:artTypes.EDIT_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
 }   
 export const editImage=(formData,idImage)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/image/edit/${idImage}`,formData);
    dispatch({
        type:artTypes.EDIT_IMAGE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
 }   

 export const deleteArticle=(idArticle)=>async (dispatch) =>{

  try{
    const res= await axios.delete(`/api/article/delete/${idArticle}`);
    dispatch({
        type:artTypes.DELETE_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
    }  
     
export const commentArticle=(formData,idArticle)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/newcomment/${idArticle}`,formData);
    dispatch({
        type:artTypes.COMMENT_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
}   

export const editComment=(formData,idArticle,idComment)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/newcomment/${idArticle}/${idComment}`,formData);
    dispatch({
        type:artTypes.EDIT_COMMENT,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
}   
export const deleteComment=(idArticle,idComment)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/newcomment/${idArticle}/${idComment}`);
    dispatch({
        type:artTypes.DELETE_COMMENT,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    dispatch(articleError(err));
    }
}   
            
        
    export const reclamerArticle=(formData,idArticle)=>async (dispatch) =>{
        try{
            const res= await axios.put(`/api/article/reclamation/${idArticle}`,formData);
            dispatch({
                type:artTypes.ADD_RECLAMATION,
                payload:res.data
            });
            }
            catch (err){
            console.dir(err);
            dispatch(articleError(err));
            }
            }   
                       