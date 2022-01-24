import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Keyboard = (props) => {
    const { _id, kbName, kbImage, kbDescription, kbPrice } = props.details;
    return (
        <Col xs={12} md={6} xl={4} className="mx-auto" >
            <div className="border shadow-sm p-3 h-100">
                <div className="mb-2 bg-dark">
                    <img src={kbImage} alt="" height="250" className="d-block mx-auto" />
                </div>
                <h5 className="fw-bold">{kbName}</h5>
                <h4 className="fw-bold my-3">${kbPrice} <span className="fs-6">USD</span></h4>
                <p style={{ textAlign: "justify" }}>{kbDescription}</p>
                <Link to={`/keyboard/${_id}`}>
                    <button className="cta">
                        <span>Learn More</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Link>
            </div>
        </Col>
    );
};

export default Keyboard;