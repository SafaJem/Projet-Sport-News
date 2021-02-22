import React, { useState } from 'react';
import { addComment } from '../../Redux/actions/articleAction';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {useDispatch} from 'react-redux'

const CommentForm = ({ article}) => {
  const [commentaire, setCommentaire] = useState('');
  const dispatch = useDispatch()
  const add =()=>{
    dispatch(addComment(article._id,{commentaire}))
  setCommentaire('')
}



  return (<div>
     <Form>
    <FormGroup>
        <Label for="examplecommentaire">Coment</Label>
        <Input
          value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
          type="name"
          placeholder="Enter your text"
        />
      </FormGroup>
      
      <Button onClick={add}>leave a comment</Button>
      </Form> 
      </div>
    
  );
};



export default CommentForm;