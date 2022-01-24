import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import useAuth from '../../Hooks/useAuth';

const BuyKeyboard = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [delivery, setDelivery] = useState(0);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const history = useHistory();


    const [singleKeyboard, setSingleKeyboard] = useState({});
    const [buyNow, setBuyNow] = useState(false);


    useEffect(() => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/keyboard/${id}`)
            .then(res => res.json())
            .then(data => setSingleKeyboard(data))
    }, [id]);

    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user]);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleDeliveryChange = (event) => {
        setDelivery(event.target.value);
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleConfirmOrder = (event) => {
        event.preventDefault();

        const newOrder = {
            keyboardName: singleKeyboard.kbName,
            keyboardPrice: singleKeyboard.kbPrice,
            keyboardImage: singleKeyboard.kbImage,
            quantity: quantity,
            deliveryMethod: delivery,
            customerName: userInfo.uName,
            customerEmail: userInfo.uEmail,
            customerPhone: phone,
            customerAddress: address,
            customerImage: userInfo.uImage,
            orderStatus: 'pending'
        }

        fetch('https://glacial-dawn-59195.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        }).then(res => {
            if (res.status === 200) {
                alert("Ordered Succesfully.")
            }
            history.push('/dashboard/my-orders')
        })
    }

    return (
        <div>
            <Navigation />
            <Container className="mt-5">

                <Row>
                    <Col xs={12} md={6} lg={5}>
                        <img src={singleKeyboard.kbImage} alt="" className="img-fluid" />
                    </Col>
                    <Col xs={12} md={6} lg={5} xl={4}>
                        <h4 className="fw-bold">{singleKeyboard.kbName}</h4>
                        <h3 className="fw-bold my-3">${singleKeyboard.kbPrice} <span className="fs-6 ms-2">USD</span></h3>
                        <p>{singleKeyboard.kbDescription}</p>

                        <h6 className="fw-bold">Backlit: {singleKeyboard.backlit}</h6>
                        <h6 className="fw-bold">Keyboard Interface: {singleKeyboard.kbInterface}</h6>
                        <h6 className="fw-bold">Key Switch: {singleKeyboard.keySwitch}</h6>
                        <h6 className="fw-bold">Keys: {singleKeyboard.keys} / {parseInt(singleKeyboard.keys) + 4} (Depends on language)</h6>
                        <h6 className="fw-bold">Dimension: {singleKeyboard.dimension}</h6>
                        <h6 className="fw-bold">Key Stroke Life: {singleKeyboard.strokeLife}</h6>
                        <h6 className="fw-bold">Product Weight: {singleKeyboard.weight}</h6>

                        {
                            !buyNow && <button className="cta" onClick={() => { setBuyNow(true) }}>
                                <span>Buy Now</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        }
                        {
                            buyNow && <div className="mt-4">
                                <Form onSubmit={handleConfirmOrder}>
                                    <Row className="row gx-3 gy-2">
                                        <Col xs={6}>
                                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control onBlur={handleQuantityChange} min="1" max="10" type="number" autoComplete="off" placeholder="Enter Quantity (1-10)" required />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Label>Delivery Method</Form.Label>
                                            <Form.Select onBlur={handleDeliveryChange} aria-label="Default select example">
                                                <option value="0">Free - 30 Days</option>
                                                <option value="10">Regular - $10 - 7 Days </option>
                                                <option value="20">Express - $20 - 3 Days</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control onBlur={handlePhoneChange} type="text" required autoComplete="off" placeholder="Enter Phone Number" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control onBlur={handleAddressChange} type="text" required autoComplete="off" placeholder="Enter Delivery Address" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <button className="cta" type="submit">
                                        <span>Confirm Order</span>
                                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                    </button>
                                </Form>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default BuyKeyboard;