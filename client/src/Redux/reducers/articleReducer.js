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
                         ... state ,articles : state.articles.articles.map(el=>el._id !== payload._id ? el : ({...el,comments:payload }) )
                         
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
        /*      case artTypes.GET_ONE_ARTICLE :
              return [...state.articles.filter(el=>el._id!==payload._id)   ]      
                             
           
                 ---
                  case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
                 ---
           case  artTypes.COMMENT_ARTICLE :
                 return state.articles.map(el=>el._id===payload._id ?[...el.commentaires ,payload] : el )
              
             case  artTypes.EDIT_COMMENT :
             
               return state.articles.map(el=>el._id===payload._id ?el.commentaires.map(comment=>comment.id!==payload.id ?comment:{...comment ,commentaire:payload.commentaire}) : el )

             case  artTypes.DELETE_COMMENT :
                 return state.articles.map(el=>el._id===payload._id ?el.commentaires.filter(comment=>comment.id!==payload.id) : el )
                  
                 case  artTypes.ADD_RECLAMATION:
                  return state.articles.map(el=>el._id===payload._id ?[...el.reclamArticles ,payload] : el )*/
               
                   
             
            }
            }
            export default articleReducer;    