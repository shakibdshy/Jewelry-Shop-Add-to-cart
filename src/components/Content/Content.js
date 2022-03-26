import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
    return (
        <div className="content-section my-5 text-start">
            <Container>
                <Row>
                    <Col>
                        <h1>How React Work?</h1>
                        <p>React JS is a JavaScript library. React Js Building a user interfaces. React uses a Virtual Dom, there by creating web application faster. React Based On Reusable components. React mostly combines basic HTML but its not a proper HTML. React User JSX(JavaScript XML), JSX not a JavaScript syntax. It's Just a syntactic sugar. </p>

                        <h1>How <code>useState</code> Work?</h1>
                        <p><code>useState</code> is a React Hook. <code>useState</code> basically work for state, and it's return current state value. A <code>useState</code> hook also be a function has a value and a function that will set that value. A <code>useState</code> hook also return a Object and array.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;