import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const MyOrders = ({ userInfo }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://glacial-dawn-59195.herokuapp.com/order/${userInfo.uEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    });


    const handleOrderDelete = (id) => {
        const sure = window.confirm("Confirm Cancel Order.")
        if (sure) {
            fetch(`https://glacial-dawn-59195.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(
                    alert("Order Cancelled Successfully.")
                )
        }
    }

    return (
        <div className="p-3">
            <h4 className="fw-bold">My Orders</h4>
            <hr />
            <Row className="row">
                {
                    orders.map(order => <Col xs={6} md={4} lg={3} key={order._id} className="ms-1">
                        <Row className="border">
                            <Col xs={4}>
                                <img src={order.keyboardImage} alt="" className="img-fluid" />
                            </Col>
                            <Col xs={8}>
                                <h6 className="fw-bold">{order.keyboardName.slice(0, 24)}</h6>
                                <h6>Quantity: {order.quantity}</h6>
                                <h6 className="fw-bold text-primary">Status: {order.orderStatus}</h6>

                            </Col>
                            <Col xs={12}>
                                <h6>Total: ${parseInt(order.keyboardPrice) * parseInt(order.quantity) + parseInt(order.deliveryMethod)} <small>USD</small></h6>
                                <h6>Phone: {order.customerPhone}</h6>
                                <h6>Delivery Add: {order.customerAddress}</h6>
                                <button onClick={() => { handleOrderDelete(order._id) }} className="btn btn-danger py-0 px-3">Cancel</button>
                            </Col>
                        </Row>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;