import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../assets/Image/3426526.jpg'
import './Home.css'


const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='home-content'>
                            <h1 className='mt-4'>
                                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                            </h1>
                            <p className='mb-4'>Improve your coding skill. Learn C,C++,Python,JavaScript,Mysql from <br /> basic to advanced.Prepare yourself for compitative programming contest. </p>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <img src={banner} alt="" className='w-100' />
                    </Col>

                </Row>
            </Container>




        </div>
    );
};

export default Home;