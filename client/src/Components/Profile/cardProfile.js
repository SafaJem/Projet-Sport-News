import {
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardText,
} from "reactstrap";

import { useSelector } from 'react-redux';

function CardUser() {
  const isAuth = useSelector((state) => state.sportReducer.isAuth);
    const user = useSelector((state) => state.sportReducer.user);
    return ( 

        <Col sm="12" md="6" className="my-3">
      <Card>
        <CardHeader className="p-4 d-flex justify-content-around align-items-center ">
          <CardText
            style={{
              width: "70px",
              height: "70px",
              fontSize: "1.5em",
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
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
      </Col>  ) 
    }
export default CardUser;