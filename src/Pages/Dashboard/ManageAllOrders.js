import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    });

    const handleOrderDelete = (id) => {
        const sure = window.confirm("Confirm Delete Order.")
        if (sure) {
            fetch(`https://glacial-dawn-59195.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(
                    alert("Order Deleted Successfully.")
                )
        }
    }
    const handleOrderApprove = (id) => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/order/${id}`, {
            method: 'PUT'
        })
            .then(
                alert("Order Approved Successfully.")
            )
    }

    return (
        <div className="p-3">
            <h4 className="fw-bold">Manage All Orders</h4>
            <hr />
            <Row className="row">
                {
                    allOrders.map(order => <Col xs={6} md={4} lg={3} key={order._id} className="ms-1">
                        <Row className="border">
                            <Col xs={4}>
                                <img src={order?.keyboardImage} alt="" className="img-fluid" />
                            </Col>
                            <Col xs={8}>
                                <h6 className="fw-bold">{order?.keyboardName}</h6>
                                <h6>Quantity: {order?.quantity}</h6>
                                <h6 className="fw-bold text-primary">Status: {order?.orderStatus}</h6>
                                <h6>Total: ${parseInt(order?.keyboardPrice) * parseInt(order?.quantity) + parseInt(order?.deliveryMethod)} <small>USD</small></h6>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={3}>
                                        <img src={order?.customerImage} alt="" className="img-fluid" />
                                    </Col>
                                    <Col xs={9}>
                                        <h6>{order?.customerName}</h6>
                                        <h6>{order?.customerEmail}</h6>
                                    </Col>
                                </Row>
                                <h6>Phone: {order?.customerPhone}</h6>
                                <h6>Delivery Add: {order?.customerAddress}</h6>
                                <button onClick={() => { handleOrderDelete(order._id) }} className="btn btn-danger py-0 px-3">Cancel</button>
                                {
                                    (order.orderStatus === 'pending') && <button onClick={() => { handleOrderApprove(order._id) }} className="ms-2 btn btn-success py-0 px-3">Approve</button>
                                }
                            </Col>
                        </Row>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default ManageAllOrders;