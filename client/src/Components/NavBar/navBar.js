import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import SignIn from '../auth/SignIn'
const NavBar = () => {
return (
     <div>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Sport News</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#features">FootBall</Nav.Link>
      <Nav.Link href="#pricing">HandBall</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      <Nav.Link href="/Signin">  SignIn </Nav.Link>
      <Nav.Link href="/Signup">Sign Up</Nav.Link>



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