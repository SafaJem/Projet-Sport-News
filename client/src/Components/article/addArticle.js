import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addArticle } from '../../Redux/actions/articleAction';
const createArticle=()=>{
 const [text,settext]=useState('')
 const [title,setTitle]=useState('')

 const [photo, setFieldValue] = useState("");
 const [cancel, setCancel] = useState(false);

const dispatch=useDispatch()
const add=()=>
{
    dispatch(addArticle({text,photo}));
    setCancel(!cancel);

}


return(
    <>
    {cancel?
    (<Redirect to='/list'/>)
    :(<div style={{ margin: "100px" }}>
    <Form>
      <FormGroup>
        <Label for="exampletext">text</Label>
        <Input
          value={text}
          onChange={(e) => settext(e.target.value)}
          type="name"
          placeholder="Enter your text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampletitle">Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="title"
          placeholder="Enter your type"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleimage">Upload Image</Label>
        <Input
          type="file"
          id="image"
          name="image"
          value={photo}
          onChange={(event) => {
            setFieldValue("photo", event.currentTarget.files[0])}}
          placeholder="Enter your url..."
        />
      </FormGroup>
      
      <Button onClick={add}>Create your article</Button>
      <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>

    </Form>
  </div>)}
  </>
)
}

export default createArticle