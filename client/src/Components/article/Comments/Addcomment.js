import React, { useState } from 'react';
import { addComment } from '../../../Redux/actions/articleAction';
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
        <Input
          value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
          type="name"
          placeholder="leave a comment"
        />
      </FormGroup>
      
      <Button onClick={add} color="warning">Send your comment</Button>
      </Form> 
      </div>
    
  );
};



export default CommentForm;