import React, { useState, Fragment } from 'react';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { logout } from '../../Redux/actions/sportAction';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'


const NavBar = ({setSearchbytitle}) => {
  const dispatch = useDispatch();
 
  const isAuth = useSelector((state) => state.sportReducer.isAuth);
  const user = useSelector((state) => state.sportReducer.user);
  
 
console.log(user)
  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <Fragment>
      
       <Nav.Link href="#Articles">Articles</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
 <Nav.Item ><Link to="/dashboardAdmin"> <span className="navbar-text mr-4"><strong> Admin </strong> </span></Link> </Nav.Item> 
  <Nav.Item ><Link to="/dashboardJournaliste"> <span className="navbar-text mr-4"><strong> Journaliste </strong> </span></Link> </Nav.Item>

      <Nav.Link href="/" onClick={logoutUser}>
        {' '}
        Sign Out
      </Nav.Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
     <Nav.Link href="/Signin"> Sign In </Nav.Link>
      <Nav.Link href="/Signup">Sign Up</Nav.Link>

    </Fragment>
  );


return (

     <div>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Sport News</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
     
      <Nav.Link href="/contactus">Contact Us</Nav.Link>
      {isAuth ? authLinks : guestLinks}


    </Nav>
    <Form inline>
      <FormControl type="text" color="success" placeholder="Search" className="mr-sm-2" onChange={(e)=>setSearchbytitle(e.target.value)}/>
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar>
 
     </div>
  );
}

export default NavBar