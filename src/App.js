import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotelList from './components/hotelList';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <Row>
        <Col sm={1} md={2}></Col>
        <Col sm={10} md={8}>
          <HotelList/>
        </Col>
        <Col sm={1} md={2}></Col>
      </Row>

      

    </div>
  );

  

}

export default App;
