import React from 'react'
import CardReclamation from './CardReclamation'
const ListReclamations=({reclamations})=>{
    return(<div>
{
    reclamations.map(el =><CardReclamation key = {el._id } reclamation = {el}/>)
}
    </div>)

} 
export default ListReclamations