import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
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

      <h1>counter : {counter}</h1>
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <button>-</button>

    </div>
  );
}

export default App;
