import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
const CourseDetails = () => {
    const details = useLoaderData();
    return (
        <div >
            <Container>
                <Row>
                    <Col lg='3'>
                    </Col>
                    <Col lg='6 '>
                        <Card style={{ width: '400px', marginLeft: '40px', marginTop: '30px' }}>
                            <Card.Img variant="top" src={details.img} />
                            <Card.Body>
                                <Card.Title>{details.name}</Card.Title>
                                <Card.Text>
                                    <h3>Price:{details.price}</h3>
                                </Card.Text>
                                <Card.Text>
                                    <h4>Details:</h4>  {details.details}
                                </Card.Text>
                            </Card.Body>
                            <h4> Course Features</h4>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{details.features[0]}</ListGroup.Item>
                                <ListGroup.Item>{details.features[1]}</ListGroup.Item>
                                <ListGroup.Item>{details.features[2]}</ListGroup.Item>
                                <ListGroup.Item>{details.features[3]}</ListGroup.Item>

                            </ListGroup>
                            <Link to='/checkout'><Button variant="success">Get Premium Access</Button>

                            </Link>
                        </Card>
                    </Col>
                    <Col lg='3'>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;