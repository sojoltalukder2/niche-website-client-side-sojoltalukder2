import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container className="mt-5 pt-5">
                <Row>
                    <Col className="mx-auto text-center" xs={11} md={6} lg={5} xl={4}>
                        <h1 className="fw-bolder">OOPS!</h1>
                        <h3 className=" fw-bolder">404 Not Found</h3>
                        <h5 className="">Sorry, an error has occured, Requested page not found!</h5>
                        <Link to="/"><span className="btn btn-dark me-3">Take Me Home</span></Link>
                        <span className="btn btn-secondary"> Contact Support</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;