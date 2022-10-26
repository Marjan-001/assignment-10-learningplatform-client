import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Category from '../Category/Category';
import './Courses.css'


import { useLoaderData } from 'react-router-dom';
import CourseCard from '../courseCard/CourseCard';


const Courses = () => {
    const course = useLoaderData();



    console.log(course);

    return (
        <div>
            <Container>
                <Row >
                    <Col lg="10" className=' mt-5 row row-cols-1 row-cols-md-3 g-4 '>

                        {
                            course.map(c => <CourseCard key={c.id} c={c}></CourseCard>)
                        }

                    </Col>
                    <Col lg="2">
                        <Category></Category>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;