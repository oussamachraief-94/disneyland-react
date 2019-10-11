import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactComponent from 'react';

class HotelList extends PureComponent {


    render() {
        const hotels = [{
            hotelName: "hotel1", description: "this is a good hotel 3* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.",
            image: "https://picsum.photos/id/59/200/300", price: 200
        }, {
            hotelName: "hotel2", description: "this is a great hotel 5* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.",
            image: "https://picsum.photos/id/60/200/300", price: 520
        }, {
            hotelName: "hotel3", description: "this is nice  hotel 4* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.",
            image: "https://picsum.photos/id/61/200/300", price: 300
        }, {
            hotelName: "hotel4", description: "this is a coool hotel 2* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.",
            image: "https://picsum.photos/id/62/200/300", price: 80
        }];

        
        let hotelList = hotels.map((hotel) => {
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
                                            <Button  variant="primary">Reserve</Button>
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

HotelList.propTypes = {

};

export default HotelList;