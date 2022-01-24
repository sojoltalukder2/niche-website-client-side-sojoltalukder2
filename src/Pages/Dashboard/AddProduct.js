import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const history = useHistory();
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [keys, setKeys] = useState('');
    const [keySwitch, setKeySwitch] = useState('');
    const [backlit, setBacklit] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productDesc, setProductDesc] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    }
    const handleProductImageChange = (event) => {
        setProductImage(event.target.value);
    }
    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    }
    const handleKeysChange = (event) => {
        setKeys(event.target.value);
    }
    const handleKeySwitchChange = (event) => {
        setKeySwitch(event.target.value);
    }
    const handleBacklitChange = (event) => {
        setBacklit(event.target.value);
    }
    const handleProductWeightChange = (event) => {
        setProductWeight(event.target.value);
    }
    const handleProductDescChange = (event) => {
        setProductDesc(event.target.value);
    }

    const handleAddProduct = (event) => {
        event.preventDefault();

        const newKeyboards = {
            kbName: productName,
            kbImage: productImage,
            kbPrice: productPrice,
            keys: keys,
            keySwitch: keySwitch,
            backlit: backlit,
            weight: productWeight,
            strokeLife: '12+ Million',
            dimension: '455 x 171 x 34 mm',
            kbInterface: 'USB 2.0',
            kbDescription: productDesc
        }

        fetch('https://glacial-dawn-59195.herokuapp.com/keyboards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newKeyboards)
        }).then(res => {
            if (res.status === 200) {
                alert("Keyboard Succesfully.")
            }
            history.push('/keyboards')
        })
    }

    return (
        <div className="p-3">
            <h4 className="fw-bold">Add Product</h4>
            <hr />

            <Form onSubmit={handleAddProduct}>
                <Row className="row gx-2">
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name*</Form.Label>
                            <Form.Control onBlur={handleProductNameChange} type="text" placeholder="Keyboard Name" required />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Image*</Form.Label>
                            <Form.Control onBlur={handleProductImageChange} type="text" placeholder="Image Link" required />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Price*</Form.Label>
                            <Form.Control onBlur={handleProductPriceChange} type="number" min="0" required placeholder="Keyboard Price" />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Label>Number of Keys*</Form.Label>
                        <Form.Select onBlur={handleKeysChange} aria-label="Default select example" required>
                            <option value="104">104</option>
                            <option value="105">105</option>
                            <option value="108">108</option>
                            <option value="109">109</option>
                        </Form.Select>
                    </Col>
                    <Col xs={6}>
                        <Form.Label>Key Switch*</Form.Label>
                        <Form.Select onBlur={handleKeySwitchChange} aria-label="Default select example" required>
                            <option value="Membrane">Membrane</option>
                            <option value="Kailh Low Profile">Kailh Low Profile</option>
                            <option value="Kailh Box White">Kailh Box White</option>
                            <option value="Corsair OPX Switch">Corsair OPX Switch</option>
                            <option value="CHERRY MX RGB Red">CHERRY MX RGB Red</option>
                            <option value="CHERRY MV Mechanical">CHERRY MV Mechanical</option>
                        </Form.Select>
                    </Col>
                    <Col xs={6}>
                        <Form.Label>Key Switch*</Form.Label>
                        <Form.Select onBlur={handleKeySwitchChange} aria-label="Default select example" required>
                            <option value="Membrane">Membrane</option>
                            <option value="Kailh Low Profile">Kailh Low Profile</option>
                            <option value="Kailh Box White">Kailh Box White</option>
                            <option value="Corsair OPX Switch">Corsair OPX Switch</option>
                            <option value="CHERRY MX RGB Red">CHERRY MX RGB Red</option>
                            <option value="CHERRY MV Mechanical">CHERRY MV Mechanical</option>
                        </Form.Select>
                    </Col>
                    <Col xs={6} className="mt-2">
                        <Form.Label>Backlit*</Form.Label>
                        <Form.Select onBlur={handleBacklitChange} aria-label="Default select example" required>
                            <option value="Static Multi-Color">Static Multi-Color</option>
                            <option value="Per-key RGB Mystic Light">Per-key RGB Mystic Light</option>
                            <option value="Full RGB Illumination">Full RGB Illumination</option>
                        </Form.Select>
                    </Col>
                    <Col xs={6} className="mt-2">
                        <Form.Group className="mb-3">
                            <Form.Label>Product Weight*</Form.Label>
                            <Form.Control onBlur={handleProductWeightChange} type="number" min="0" required placeholder="Keyboard Weight in g" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product Description...</Form.Label>
                    <Form.Control onBlur={handleProductDescChange} as="textarea" rows={3} required />
                </Form.Group>
                <button className="btn btn-outline-dark mt-3" type="submit">Add Product</button>
            </Form>
        </div>
    );
};

export default AddProduct;