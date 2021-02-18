import React, { FC }  from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const  PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props) => {

    const isAuth = useSelector((state) => state.sportReducer.isAuth);

return  isAuth ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
    (<Redirect  to="/"  />);
};
export  default  PrivateRoute;