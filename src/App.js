import React, { useState } from "react";
import {  Navbar,  Container,  Nav,  NavDropdown,  Button,  Row,  Col,
} from "react-bootstrap";
import "./App.css";
//import {name, name2} from './data.js';
import Data from "./data.js";
import Detail from "./Detail.js";
import { Link, Route, Switch } from "react-router-dom";
import './Detail.scss';
import axios from 'axios';

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [loading,setLoading]=useState(false);
  let [재고,재고변경]=useState([10,11,12]);

 const loadJson=()=>{
    // axios.post('서버URL',{id:'codingapple',pw:1234});
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{
      // 로딩중안보이게하기                
        setLoading(false);   
      shoes변경([...shoes,...result.data]);
    })
    .catch(()=>{
      // 로딩중 보이게 하기
      setLoading(true);
      console.log('실패..')
    });
    // axios ->json을 object로 변환해준다.

    // 생자바스크립트
    //   fetch('https://codingapple1.github.io/shop/data2.json')
    //   .then((res) => {
    //     return res.json(); //Promise 반환
    // })
    // .then((json) => {
    //     console.log(json); // 서버에서 주는 json데이터가 출력 됨
    // });
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> Show Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link><Link to="/">Home</Link></Nav.Link> */}
              <Nav.Link as={Link} to="/">Home </Nav.Link> 
              <Nav.Link as={Link} to="/detail/0">Detail </Nav.Link>
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
                //또는 return <Card shoes={shoe} />                
              })}
            </div>
            <button className="btn btn-primary" onClick={loadJson}>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id" >
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route  path="/:id">
            <div>아무거나 적었을때 이거 보여주셈</div>
        </Route>
      </Switch>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}
      {loading===true ? <Loading /> : null}
   
    </div>
  );
}

function Loading(){
  return(
    <h2> Loading.....</h2>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"img/shoes" + props.i + ".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default App;
