import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://glacial-dawn-59195.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container className="mt-5 pt-5">
            <h5 className="text-center fw-bold">CUSTOMER REVIEWS</h5>
            <h3 className="text-center fw-bold">See What People are Saying About Us.</h3>
            <hr className="w-25 mx-auto mb-5" />
            <Row className="mt-5">
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;
