import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";
//import {name, name2} from './data.js';
import Data from "./data.js";
import Detail from "./Detail.js";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> Show Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <section className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </section>
          <div className="container">
            <div className="row">
              {shoes.map((shoe, i) => {
                return <Card shoes={shoes[i]} i={i + 1} key={shoe.id} />;
                // return <Card shoes={shoe} />
              })}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id" exact>
          <Detail shoes={shoes} />
        </Route>

        <Route exact path="/:id">
          <div> 아무거나 보여주셈</div>
        </Route>
      </Switch>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}

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

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"shoes" + props.i + ".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default App;
