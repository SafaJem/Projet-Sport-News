import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../Redux/actions/articleAction";
import NavBar from "../NavBar/navBar";
import ArticleCard from "./articleCard";

const ListArticles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, []);

const articles = useSelector((state)=>state.articleReducer.articles.articles);
  return (
    <div>
    <NavBar/>
      { articles &&
        articles.map((article)=>(<ArticleCard key={article._id} article={article} />))
      }
    
    </div>
  );
};

export default ListArticles;