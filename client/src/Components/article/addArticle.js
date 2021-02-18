import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addArticle } from '../../Redux/actions/articleAction';

const CreateArticle=()=>{
 const [text,setText]=useState('')
 const [title,setTitle]=useState('')
 const [image, setImage] = useState("");
 const [nameJournaliste,setNameJournaliste]=useState('')
 const [cancel, setCancel] = useState(false);

const dispatch=useDispatch()
const add=()=>
{
    dispatch(addArticle({text,title,image,nameJournaliste}));
    setCancel(!cancel);

}
return(
    <>
    {cancel?
    (<Redirect to='/listarticle'/>)
    :(<div style={{ margin: "100px" }}> 
    <Form>
       <FormGroup>
        <Label for="exampletitle">Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="title"
          placeholder="Enter your title"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Text</Label>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="name"
          placeholder="Enter your text"
        />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampletitle">Image</Label>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Enter your image"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Name Journaliste</Label>
        <Input
          value={nameJournaliste}
          onChange={(e) => setNameJournaliste(e.target.value)}
          type="name"
          placeholder="Enter your text"
        />
      </FormGroup>
      
      <Button onClick={add}>Create your article</Button>
      <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>

    </Form>
  </div>)}
  </>
)
}

export default CreateArticle