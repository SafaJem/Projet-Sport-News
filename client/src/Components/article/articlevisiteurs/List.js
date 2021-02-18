import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../Redux/actions/articleAction";
import Cardd from "./Card";

const List = ({searchbytitle}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, []);

const articles = useSelector((state)=>state.articleReducer.articles.articles);
  return (
    <div>
      
      { articles &&
        articles.filter(el=>el.title.toLowerCase().includes(searchbytitle.toLowerCase().trim())).map((article)=>(<Cardd key={article._id} article={article} />))
      }
    
    </div>
  );
};

export default List;