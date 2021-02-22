import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../Redux/actions/articleAction";
import NavBar from "../NavBar/navBar";
import ArticleCard from "./articleCard";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'
const ListArticles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, []);

const articles = useSelector((state)=>state.articleReducer.articles.articles);
  return (
    <div>
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

      { articles &&
        articles.map((article)=>(<ArticleCard key={article._id} article={article} />))
      }
    
    </div>
  );
};

export default ListArticles;