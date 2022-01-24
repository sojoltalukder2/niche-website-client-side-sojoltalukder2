import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MakeReview = ({ userInfo }) => {
    const history = useHistory();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleReviewSubmit = (event) => {
        event.preventDefault();

        const newReview = {
            cusName: userInfo.uName,
            reviewDesc: comment,
            cusImg: userInfo.uImage,
            rating: rating
        }

        fetch('https://glacial-dawn-59195.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        }).then(res => {
            if (res.status === 200) {
                alert("Review Added Succesfully.")
            }
            history.push('/')
        })
    }

    return (
        <div className="p-3">
            <h4 className="fw-bold">Make A Review</h4>
            <hr />

            <Form onSubmit={handleReviewSubmit}>
                <Row className="row gx-2">
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Review as</Form.Label>
                            <Form.Control type="text" value={userInfo.uName} readOnly />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Rating</Form.Label>
                            <Form.Control onBlur={handleRatingChange} type="number" min="0" max="5" placeholder="Rating 0 to 5" step="1" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write your review...</Form.Label>
                    <Form.Control onBlur={handleCommentChange} as="textarea" rows={3} />
                </Form.Group>
                <Form.Text className="text-muted">
                    Your review will be public.
                </Form.Text> <br />
                <button className="btn btn-outline-dark mt-3" type="submit">Add Review</button>
            </Form>
        </div>
    );
};

export default MakeReview;