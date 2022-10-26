import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h2 style={{ color: 'green' }}> Frequently Asked Questions:</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header variant="success">Does it provide lifetime access?</Accordion.Header>
                    <Accordion.Body>
                        Yes..Our course provides lifetime access.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do I have to finish the course on time to get certificate?</Accordion.Header>
                    <Accordion.Body>
                        Yes, you have to.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;