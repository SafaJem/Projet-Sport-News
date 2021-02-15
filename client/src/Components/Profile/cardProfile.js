import React,{ useEffect } from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux" ;

import { getCurrentProfile } from '../../Redux/actions/profileAction';



const CardProfile=()=>{ 

 const dispatch = useDispatch(); 
  useEffect(() => {
   dispatch (getCurrentProfile());
  }, []);

  const Profile = useSelector((state) => state.profileReducer.profile);


return (
<div>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{Profile.userName}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
)

}

export default CardProfile