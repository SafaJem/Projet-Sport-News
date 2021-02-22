import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import CommentForm from '../Comments/Addcomment'
import  CommentList from '../Comments/ListComments'
import FormReclamation from  '../Reclamations/addReclamation'
const Cardd = ({article}) => {
  return (
    
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card  body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}>
         <CardTitle tag="h5">{article.title}</CardTitle> 
        <CardImg top width="100%" src={article.image} alt="Card image cap" />
        <CardBody>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">
   
       Publié le   {article.date.slice(0, 10)} ---{" "}
          {article.date.slice(11, 19)}
          </CardSubtitle>
          <CardText>{article.text}</CardText>
          <CardText>Crée par {article.nameJournaliste}</CardText>
        </CardBody>
          <CommentForm article={article} />
         <CommentList  comments={article.comments} idArticle={article._id}  />
      <FormReclamation article = {article}/>  
     
      </Card>
      <CommentList comments={article.comments} idArticle={article._id} />
      <FormReclamation article = {article}/>
    </div>
 
  );
};



export default Cardd;
