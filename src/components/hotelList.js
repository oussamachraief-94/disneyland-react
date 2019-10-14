import React  from 'react';
import { ReactComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { reserve } from './../actions';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';


class HotelList extends React.Component {

    
    
    
    render() {
        let hotelList = this.props.counter.map((hotel) => {
            return (
                <Row>
                    <Col sm={10} md={10} className="main-layout">
                        <Row className="justify-content-md-center">
                            <Card className="rounded-corner">
                                <Row><Col sm={4}>
                                    <Card.Img variant="top" src={hotel.image} />
                                </Col><Col sm={8}>
                                        <Card.Body>
                                            <Card.Title>{hotel.hotelName}</Card.Title>
                                            <Card.Text>
                                                {hotel.description}
                                            </Card.Text>
                                            <Button onClick={()=>this.props.reserve()} variant="primary">Reserve</Button>
                                        </Card.Body></Col></Row>
                            </Card>
                        </Row>
                    </Col >
                    <Col sm={2} md={2} className="panier"></Col>
                </Row >
            );
        });

        return(<div>{hotelList}</div>); 




    }
        
    
    
     
    
    
}

const mapStateToProps=(state)=>{
    return {
        counter:state.counter
    };
}
const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      reserve: () => dispatch({ type: 'RESERVER' }),
      
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(HotelList);




