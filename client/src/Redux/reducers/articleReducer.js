import * as artTypes from '../constants/articleActionTypes'

const initialState= {articles:[{_id:'1',text:'azerty',image:'oihpppdf',commentaires:[{_id:'01',commentaire:"this is 1st comment"}]},{_id:'2',text:'azerty',image:'oihdf',commentaires:[{_id:'03',commentaire:"this is 3rd comment"}]},{_id:'3',text:'azerty',image:'oiiiihdf',commentaires:[{_id:'01',commentaire:"this is 1st comment"}]}],}


    const articleReducer =(state=initialState,{type,payload})=>{
        switch(type){ 
            case  artTypes.GET_ARTICLE :
                     return{
                       ...state,
                       articles : payload}
                             
            case artTypes.ADD_ARTICLE:
           return[...state.articles,{text:payload.text}]

             case  artTypes.EDIT_ARTICLE:
               return state.articles.map(el=>el._id!==payload._id? el : {...el,text:payload.text} )
    
             case  artTypes.DELETE_ARTICLE :
             return state.artciles.filter(el=>el._id!==payload._id)
                 
                 
             case  artTypes.COMMENT_ARTICLE :
                 return state.articles.map(el=>el._id===payload._id ?[...el.commentaires ,{commentaire : payload.commentaire}] : el )
              
             case  artTypes.EDIT_COMMENT :
             
               return state.articles.map(el=>el._id===payload._id ?el.commentaires.map(comment=>comment.id!==payload.id ?comment:{...comment ,commentaire:payload.commentaire}) : el )

             case  artTypes.DELETE_COMMENT :
                 return state.articles.map(el=>el._id===payload._id ?el.commentaires.filter(comment=>comment.id!==payload.id) : el )
                  
             case artTypes.ADD_IMAGE:
                   return[...state.articles,{image:payload.image}]

             case  artTypes.EDIT_IMAGE:
                     return state.articles.map(el=>el._id!==payload._id? el : {...el,image:payload.image} )
             case  artTypes.del :
                     return state.artciles.filter(el=>el._id!==payload._id)
                   
             default:
                 return state;
            }
            }
            export default articleReducer;    