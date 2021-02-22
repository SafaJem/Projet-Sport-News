import React from 'react'
import CardCommentaire from './CardCommentaire'
const ListComments=({comments,idArticle})=>{
    return(<div>
{
    comments.map(el =><CardCommentaire key = {el._id } comment = {el} idArticle ={idArticle}/>)
}
    </div>)

} 
export default ListComments