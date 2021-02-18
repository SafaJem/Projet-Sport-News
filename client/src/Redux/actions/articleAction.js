import axios from 'axios'
import { GET_ARTICLE,ADD_COMMENT , REMOVE_COMMENT,ADD_RECLAMATION} from '../constants/actionTypes';

export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
     'x-auth-token': localStorage.getItem('token'),
    },
  };
 
  try {
    const res = await axios.post(
      `/api/article/newcomment/${postId}`,formData,config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
   
  } catch (err) {
    console.dir(err);
  }
};


export const addReclamation = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
     'x-auth-token': localStorage.getItem('token'),
    },
  };
 
  try {
    const res = await axios.post(
      `/api/article/reclamation/${postId}`,formData,config
    );

    dispatch({
      type: ADD_RECLAMATION,
      payload: res.data,
    });
   
  } catch (err) {
    console.dir(err);
  }
};

export const addArticle=(formData)=>async (dispatch) =>{
try{
    
const res= await axios.post('/api/article/articles',formData);
dispatch({
    type:GET_ARTICLE,
    payload:res.data
});
}
catch (err){
    console.dir(err);
    }
}  


/* export const getOneArticle=()=>async (dispatch) =>{
    try{
    const res= await axios.get(`/api/article/oneArticle`);
    dispatch({
        type:artTypes.GET_ONE_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
        console.dir(err);
        }
    }   */
  
export const getArticles=()=>async (dispatch) =>{
    try{
    const res= await axios.get('/api/article/');
    dispatch({
        type:GET_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
        console.dir(err);
        }
    }   
    
  
export const editArticle=(idArticle,formData)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/edit/${idArticle}`,formData);
    dispatch({
        type:GET_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    }
 }   

 export const deleteArticle=(idArticle)=>async (dispatch) =>{

  try{
    const res= await axios.delete(`/api/article/delete/${idArticle}`);
    dispatch({
        type:GET_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    }
    }  
    export const deleteComment = (postId, commentId) => async (dispatch) => {
        try {
          const res = await axios.delete(`/api/article/deletecomment/"${postId}/${commentId}`);
      
          dispatch({
            type: REMOVE_COMMENT,
            payload: commentId,
          });
        }
        catch(err){
            console.dir(err)
        }
    }
 /* export const commentArticle=(idArticle,formData)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/newcomment/${idArticle}`,formData);
    dispatch({
        type:artTypes.COMMENT_ARTICLE,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    //dispatch(articleError(err));
    }
}   









------------------------------------------------------------


export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


------------------------------------------------------------






export const editComment=(formData,idArticle,idComment)=>async (dispatch) =>{

    try{
    const res= await axios.put(`/api/article/editcomment/${idArticle}/${idComment}`,formData);
    dispatch({
        type:artTypes.EDIT_COMMENT,
        payload:res.data
    });
    }
    catch (err){
    console.dir(err);
    //dispatch(articleError(err));
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
    //dispatch(articleError(err));
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
            //dispatch(articleError(err));
            }
            }*/