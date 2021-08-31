import React ,{useState} from 'react';
import { Navbar,Container,Nav, NavDropdown,Button,Row,Col} from 'react-bootstrap';
import './App.css';
//import {name, name2} from './data.js';
import Data from './data.js';

function App() {

  let [shoes, shoes변경]=useState(Data);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> Show Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
      <section className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="shoes1.jpg" width="100%"/>
            <h4> {shoes[0].title}</h4>
            <p>  {shoes[0].content} &{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
          <img src="shoes2.jpg" width="100%"/>
            <h4>  {shoes[1].title}</h4>
            <p>  {shoes[1].content} &{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="./shoes3.jpg" width="100%"/>
              <h4>  {shoes[2].title}</h4>
              <p>  {shoes[2].content} &{shoes[2].price}</p>
          </div>
        </div>
      </div>
      <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
   </div>
  );
}

export default App;
