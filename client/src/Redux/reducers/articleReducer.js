import * as artTypes from '../constants/articleActionTypes'

const initialState= {articles:[],}


    const articleReducer =(state=initialState,{type,payload})=>{
        switch(type){ 
            case  artTypes.GET_ARTICLE :
              
                     return{
                       ...state,
                       articles : payload}
            case artTypes.GET_ONE_ARTICLE :
              return [...state.articles.filter(el=>el._id!==payload._id)   ]      
                             
            case artTypes.ADD_ARTICLE:
           return[...state.articles,{text:payload.text}]

             case  artTypes.EDIT_ARTICLE:
               return state.articles.map(el=>el._id!==payload._id? el : {...el,text:payload.text} )
    
             case  artTypes.DELETE_ARTICLE :
             return state.artciles.filter(el=>el._id!==payload._id)
                 
                 
             case  artTypes.COMMENT_ARTICLE :
                 return state.articles.map(el=>el._id===payload._id ?[...el.commentaires ,payload] : el )
              
             case  artTypes.EDIT_COMMENT :
             
               return state.articles.map(el=>el._id===payload._id ?el.commentaires.map(comment=>comment.id!==payload.id ?comment:{...comment ,commentaire:payload.commentaire}) : el )

             case  artTypes.DELETE_COMMENT :
                 return state.articles.map(el=>el._id===payload._id ?el.commentaires.filter(comment=>comment.id!==payload.id) : el )
                  
                 case  artTypes.ADD_RECLAMATION:
                  return state.articles.map(el=>el._id===payload._id ?[...el.reclamArticles ,payload] : el )
               
                   
             default:
                 return state;
            }
            }
            export default articleReducer;    