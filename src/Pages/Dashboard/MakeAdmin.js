import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [user, setUser] = useState({});
    const [sEmail, setSEmail] = useState('');

    const handleEmailChange = (event) => {
        setSEmail(event.target.value);
    }
    const handleSearchUser = (event) => {
        event.preventDefault();
        fetch(`https://glacial-dawn-59195.herokuapp.com/user/${sEmail}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }
    const searchUser = () => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/user/${sEmail}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }

    const handleMakeAdmin = () => {
        const sure = window.confirm("Confirm New Admin.")
        if (sure) {
            fetch(`https://glacial-dawn-59195.herokuapp.com/user/${user._id}`, {
                method: 'PUT'
            })
                .then(
                    alert("Admin Added Successfully.")
                )
                .then(searchUser())
        }
    }

    return (
        <div className="p-3">
            <h4 className="fw-bold">Make Admin</h4>
            <hr />
            <Form onSubmit={handleSearchUser}>
                <Row className="row g-1">
                    <Col xs={3} md={4}>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Search User By Email" required />
                    </Col>
                    <Col xs={9} md={8}>
                        <button className="btn btn-dark" type="submit">
                            Search User
                        </button>
                    </Col>
                </Row>
            </Form>
            <Card style={{ width: '18rem', marginTop: "15px" }}>
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <img src={user?.uImage} alt="" className="img-fluid" />
                        </Col>
                        <Col xs={9}>
                            <Card.Title>{user?.uName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{user?.uEmail}</Card.Subtitle>
                        </Col>
                    </Row>

                    {
                        (user.uType === 'admin') && <Card.Text className="mt-2 text-center">
                            User is already admin.
                        </Card.Text>

                    }
                    {
                        (user.uType === 'general') && <button onClick={handleMakeAdmin} className="btn btn-dark">Make Admin</button>

                    }


                </Card.Body>
            </Card>
        </div>
    );
};

export default MakeAdmin;