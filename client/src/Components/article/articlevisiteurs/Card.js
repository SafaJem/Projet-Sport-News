import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import CommentForm from '../comment'
import  CommentList from '../ListComments'
import FormReclamation from  '../addReclamation'

const Cardd = ({article}) => {
  return (

    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card  body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}>
        <CardImg top width="100%" src={article.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{article.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
   
       Publier le   {article.date.slice(0, 10)} ---{" "}
          {article.date.slice(11, 19)}
          </CardSubtitle>
          <CardText>{article.text}</CardText>
          <CardText>Créer par {article.nameJournaliste}</CardText>
        </CardBody>
          <CommentForm article={article} />
      </Card>
      <CommentList comments={article.comments} idArticle={article._id} />
      <FormReclamation article = {article}/>
    </div>
  );
};



export default Cardd;
