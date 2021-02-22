import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.sportReducer.isAuth);
  const user = useSelector((state) => state.sportReducer.user);
 const  {role }=user;
  if (!isAuth || (role !== 'admin')) {
    return <Redirect to="/" />;
  }                                    // path="/" render="" exact
  return <Route component={Component} {...rest} />;
};
export const PrivateRouteJournaliste = ({ component: Component, ...rest }) => {
    const isAuth = useSelector((state) => state.sportReducer.isAuth);
    const user = useSelector((state) => state.sportReducer.user);
   const  {role }=user;
    if (isAuth  && ((role === 'journaliste')|| (role === 'admin') )) {
      return <Route component={Component} {...rest} />;
    }                                    
   return <Redirect to="/" />;
  };