import React, { useState } from 'react';
import { addReclamation } from '../../Redux/actions/articleAction';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {useDispatch} from 'react-redux'

const FormReclamation = ({ article}) => {
  const [reclamation, setReclamation] = useState('');
  const dispatch = useDispatch()
  const reclam =()=>{
    dispatch(addReclamation(article._id,{reclamation}))
setReclamation('')}



  return (<div>
     <Form>
    <FormGroup>
        <Label for="examplecommentaire">reclame some thing</Label>
        <Input
          value={reclamation}
        onChange={(e) => setReclamation(e.target.value)}
          type="name"
          placeholder="Enter your text"
        />
      </FormGroup>
      
      <Button onClick={reclam}>Create your article</Button>
      </Form> 
      </div>
    
  );
};



export default FormReclamation;