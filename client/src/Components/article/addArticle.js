import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addArticle } from '../../Redux/actions/articleAction';
import NavBar from '../NavBar/navBar'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Link} from 'react-router-dom'
const CreateArticle=()=>{
 const [text,setText]=useState('')
 const [title,setTitle]=useState('')
 const [image, setImage] = useState("");
 const [cancel, setCancel] = useState(false);

const dispatch=useDispatch()
const add=()=>
{
    dispatch(addArticle({text,title,image}));
    setCancel(!cancel);

}
return(
    <>
    <NavBar/>
    <Card>
<CardHeader title="WELCOME TO THE JOURNALIST" />
  <Link to="/listarticle">
          {" "}
          <Button outline color="success">List Articles</Button>
        </Link>
        <Link to="/addarticle">
          {" "}
          <Button outline color="success">Create article</Button>
        </Link>
        </Card>

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
      
      
      <Button  outline color="success" onClick={add}>Create your article</Button>
      <Button  outline color="success" onClick={()=>setCancel(!cancel)}>Cancel</Button>

    </Form>
  </div>)}
  </>
)
}

export default CreateArticle