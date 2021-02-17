import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'
import NavBar from "../NavBar/navBar";

 const DashboardAdmin=() =>{
    return (
    <div>

  <NavBar/>
 <Card>
<CardHeader title="WELCOME TO THE ADMINISTRATION" />
 
 <Link to="/listusers">
          {" "}
          <Button outline color="success">List Users</Button>
        </Link>
        <Link to="/adduser">
          {" "}
          <Button outline color="success">Create user</Button>
        </Link>
        <Link to="/listarticle">
          {" "}
          <Button outline color="success">List Articles</Button>
        </Link>
        <Link to="/addarticle">
          {" "}
          <Button outline color="success">Create article</Button>
        </Link>
        </Card>
</div>)
}
export default DashboardAdmin