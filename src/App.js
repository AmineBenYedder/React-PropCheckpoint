import './App.css';
import Container from 'react-bootstrap/Container';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PlayerList from './PlayerList';



function App() {
  return (
    <div className='App'>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand > <h1>TOP 5 : BEST YOUNG AFRICAN PLAYERS</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><h2> FOOTBALL AFRICA </h2></Nav.Link>
            <Nav.Link href="#link"><h2>Young talents 2023</h2></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
   <PlayerList />

   </div>
);
}

export default App;
