import React from 'react';
import { useDispatch} from 'react-redux';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { deleteArticle } from '../../Redux/actions/articleAction';
import EditArticle from './EditArticle';


const ArticleCard = ({article}) => {

  const dispatch = useDispatch();
  const delet = () => {
    dispatch(deleteArticle(article._id));
  };

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
          <CardText>Créer par {article.nameJournaliste}</CardText><div style={{ display: "flex", justifyContent: "space-arround" }}>
     <Button color="warning" onClick={delet}>delete</Button> 
        <EditArticle article={article}/>
        </div>
        </CardBody>
        
      </Card>
    </div>
  );
};



export default ArticleCard;





 
