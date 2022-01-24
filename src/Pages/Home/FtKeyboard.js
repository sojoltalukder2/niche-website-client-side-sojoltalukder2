import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FtKeyboard = (props) => {
    const { _id, kbName, kbImage } = props.details;
    return (
        <Col xs={12} md={6} xl={4} className="mx-auto" >
            <div className="border shadow-sm p-2 h-100">
                <div className="bg-secondary mb-2">
                    <img src={kbImage} alt="" height="300" className="d-block mx-auto" style={{ maxWidth: "100%" }} />
                </div>
                <h6>{kbName}</h6>
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

export default FtKeyboard;