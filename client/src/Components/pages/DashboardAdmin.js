import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'

 const DashboardAdmin=() =>{
    return (
    <div>
 <Card>
<CardHeader title="WELCOME TO THE ADMINISTRATION" />
 
 <Link to="/listusers">
          {" "}
          <Button color="info">List Users</Button>
        </Link>
        <Link to="/adduser">
          {" "}
          <Button color="info">Create user</Button>
        </Link>
        </Card>
</div>)
}
export default DashboardAdmin