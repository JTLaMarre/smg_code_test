import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import File from './components/fileInput';
import {Container,Row,Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Container>
          <Row className="justify-content-center">
          <Col className="text-center">
          <h1>Upload an Image to generate a URL!</h1>
          <hr></hr>
          </Col>
          </Row>
          <File />
    </Container>
    </div>
  );
}

export default App;
