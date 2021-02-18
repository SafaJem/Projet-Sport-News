import {
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardText,
} from "reactstrap";

import { useSelector } from 'react-redux';
import NavBar from "../NavBar/navBar";

function CardUser() {
  const isAuth = useSelector((state) => state.sportReducer.isAuth);
    const user = useSelector((state) => state.sportReducer.user);
    return ( 
      <div>
      <NavBar/>
        <Col sm="12" md="15" className="my-3 align-items-center"  >
      <Card>
        <CardHeader className="p-4 d-flex justify-content-around align-items-center ">
          <CardText
            style={{
              width: "70px",
              height: "70px",
              fontSize: "1.5em",
              color:'#ecd599'
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-success text-md"
          >
            {user ? ` ${user.name&&user.name[0].toUpperCase()}`: null}
            
          </CardText>

          <ListGroup flush className="w-75" >
            <ListGroupItem>{user ? `Name: ${user.name}`: null}</ListGroupItem>
            <ListGroupItem>{user ? `Last Name: ${user.lastName}`: null}</ListGroupItem>
            <ListGroupItem>{user ? `Email: ${user.email}`: null}</ListGroupItem>
          </ListGroup>
        </CardHeader>
      </Card>
      </Col> </div> ) 
    }
export default CardUser