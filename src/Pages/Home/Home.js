import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import Banner from './Banner';
import FtKeyboards from './FtKeyboards';
import { MdOutlineAssignmentReturn, MdOutlineCreditCard, MdOutlineLocalShipping, MdSupportAgent } from "react-icons/md";
import Reviews from './Reviews';
import Featuredin from './Featuredin';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />

            <Container className="mt-5 py-4">
                <Row className="row my-5">
                    <Col xs={6} md={3} className="text-center">
                        <MdOutlineLocalShipping style={{ padding: "15px", border: "1px solid black", borderRadius: "50%", fontSize: "100px" }} />
                        <h5 className="fw-bold mt-3">Worldwide Shipping.</h5>
                        <h6>Free shipping to the US.</h6>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <MdSupportAgent style={{ padding: "15px", border: "1px solid black", borderRadius: "50%", fontSize: "100px" }} />
                        <h5 className="fw-bold mt-3">World Clas Support.</h5>
                        <h6>Before and After Sale Service.</h6>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <MdOutlineCreditCard style={{ padding: "15px", border: "1px solid black", borderRadius: "50%", fontSize: "100px" }} />
                        <h5 className="fw-bold mt-3">Pay Securely.</h5>
                        <h6>CC, PayPal & Amazon pay.</h6>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <MdOutlineAssignmentReturn style={{ padding: "15px", border: "1px solid black", borderRadius: "50%", fontSize: "100px" }} />
                        <h5 className="fw-bold mt-3">30 Day Return.</h5>
                        <h6>And in-house warranty support*</h6>
                    </Col>
                </Row>
            </Container>

            <FtKeyboards />
            <Featuredin />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;