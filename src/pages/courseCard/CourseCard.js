import React from 'react';
import { Card } from 'react-bootstrap';


const CourseCard = ({ c }) => {
    return (
        <div >
            <Card style={{ width: '18rem', height: '450px' }}>
                <Card.Img style=
                    {{ height: '300px' }} variant="top" src={c.img} />
                <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Title>Course Fee:{c.price}</Card.Title>


                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;