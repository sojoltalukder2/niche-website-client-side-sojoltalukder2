import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import techCrunch from '../../images/techcrunch.png';
import newYorkTimes from '../../images/the-new-york-times.png';
import usaToday from '../../images/usa-today.png';
import forbes from '../../images/forbes.png';
import businessInsider from '../../images/business-insider.png';

const Featuredin = () => {
    return (
        <div>
            <Container className="my-5 pt-5">
                <h2 className="fw-bold text-center">Mentioned In</h2>
                <hr className="w-25 mx-auto mb-5" />
                <Row className="row gx-5" style={{ filter: `grayscale(${1})` }}>
                    <Col xs={4} lg={3}>
                        <img src={techCrunch} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={4} lg={3}>
                        <img src={newYorkTimes} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={3} lg={2}>
                        <img src={usaToday} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={1} className=" d-none d-lg-block">
                        <img src={forbes} alt="" height="40%" />
                    </Col>
                    <Col xs={2} className="ms-5 d-none d-lg-block">
                        <img src={businessInsider} height="40%" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Featuredin;