import React, { useState, Fragment } from 'react';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { logout } from '../../Redux/actions/sportAction';
import { useSelector, useDispatch } from 'react-redux';


const NavBar = () => {
  const dispatch = useDispatch();
 
  const isAuth = useSelector((state) => state.sportReducer.isAuth);
  const user = useSelector((state) => state.sportReducer.user);


  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <Fragment>
       <Nav.Link href="#Articles">Articles</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/" onClick={logoutUser}>
        {' '}
        Logout
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
    <Navbar.Brand href="#home">Sport News</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
     
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      {isAuth ? authLinks : guestLinks}


    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
 
     </div>
  );
}

export default NavBar