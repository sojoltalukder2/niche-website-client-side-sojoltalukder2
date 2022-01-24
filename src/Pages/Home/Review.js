import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating';

const Review = (props) => {
    const { cusName, reviewDesc, cusImg, rating } = props.review;

    return (
        <Col className="mx-auto  mb-3" xs={11} md={6} lg={4}>
            <Card className="h-100">
                <Card.Body>
                    <div className="d-flex">
                        <div>
                            <img src={cusImg} style={{ height: "50px", width: "50px", marginRight: "15px", borderRadius: "50%" }} alt="" />
                        </div>
                        <div>
                            <Card.Title className="fw-bold">{cusName}</Card.Title>
                            <Card.Subtitle className="mb-2">
                                <RatingView
                                    ratingValue={rating}
                                    size={20}
                                    fillColor='orange'
                                    emptyColor='gray'
                                />
                            </Card.Subtitle>
                        </div>
                    </div>
                    <Card.Text>{reviewDesc}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;