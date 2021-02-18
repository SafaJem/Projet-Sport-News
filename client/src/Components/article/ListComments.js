import React from 'react'
import CardCommentaire from './CardCommentaire'
const ListComments=({comments})=>{
    return(<div>
{
    comments.map(el =><CardCommentaire key = {el._id } comment = {el}/>)
}
    </div>)

} 
export default ListComments