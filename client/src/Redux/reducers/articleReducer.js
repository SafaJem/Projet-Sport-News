import { GET_ARTICLE ,ADD_COMMENT,
   REMOVE_COMMENT,
   ADD_RECLAMATION, } from "../constants/actionTypes"

const initialState= {articles:[] ,}


    const articleReducer =(state=initialState,{type,payload})=>{
        switch(type){ 
            case GET_ARTICLE :
              
                     return{
                       ...state,
                       articles : payload};
                        
                       case ADD_COMMENT:

                        return {
                         ... state.articles ,articles : state.articles.articles.map(el=>el._id !== payload._id ? el : ({...el,comments:payload }) )
                         
                        };
                           
                       case ADD_RECLAMATION:

                        return {
                         ... state ,articles : state.articles.articles.map(el=>el._id !== payload._id ? el : ({...el,reclamArticles:payload }) )
                         
                        };

                        case REMOVE_COMMENT:
                         let newstate  ={ ...state, articles:  state.articles.articles.filter( art => art._id !== payload.articleId)}
                          return {
                        ... newstate.articles.comments.filter(el=>el._id!== payload.commentId)
                            }
                        default:
                 return state;
             
            }
            }
            export default articleReducer;    