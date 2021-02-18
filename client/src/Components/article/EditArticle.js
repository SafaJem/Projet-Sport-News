import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { editArticle } from "../../Redux/actions/articleAction";

const EditArticle = ({ article }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [text, setText] = useState(article.text);
  const [image, setImage] = useState(article.image);
  const [nameJournaliste, setNameJournaliste] = useState(article.nameJournaliste);
  const toggle = () => {
    setModal(!modal);
    setTitle(article.title);
    setText(article.text);
    setImage(article.image);
    setNameJournaliste(article.nameJournaliste);
  };
  const dispatch = useDispatch();
  const editt = () => {
    dispatch( editArticle(article._id, {text,title,image,nameJournaliste }));
    toggle();
  };
  return (
    <div>
      <Button color="success" onClick={toggle}>
        Edit Article{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
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
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button  outline color="success" onClick={editt}>
            save
          </Button>{" "}
          <Button  outline color="success" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditArticle;