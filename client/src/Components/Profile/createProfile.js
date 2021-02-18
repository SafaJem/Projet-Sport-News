import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { createProfile } from '../../Redux/actions/profileAction';
const CreateProfile=()=>{
 const [userName,setUserName]=useState('')
 const [cancel, setCancel] = useState(false);

const dispatch=useDispatch()
const add=()=>
{
    dispatch(createProfile({userName}));
    setCancel(!cancel);

}

return(
    <>
    {cancel?
    (<Redirect to='/profile'/>)
    :(<div style={{ margin: "100px" }}>
    <Form>
      <FormGroup>
        <Label for="exampleuserName">userName</Label>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="name"
          placeholder="Enter your userName"
        />
      </FormGroup>
      <Button onClick={add}>Create your profile</Button>
      <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>

    </Form>
  </div>)}
  </>
)
}

export default CreateProfile