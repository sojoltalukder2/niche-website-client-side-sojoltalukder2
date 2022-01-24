import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://glacial-dawn-59195.herokuapp.com/keyboards')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    });

    const handleProductDelete = (id) => {
        const sure = window.confirm("Confirm Product Delete.")
        if (sure) {
            fetch(`https://glacial-dawn-59195.herokuapp.com/keyboard/${id}`, {
                method: 'DELETE'
            })
                .then(
                    alert("Product Deleted Successfully.")
                )
        }
    }

    return (
        <div className="p-3">
            <h4 className="fw-bold">Manage Products</h4>
            <hr />
            <Row className="row mt-2 g-3">
                {
                    allProducts.map(product => <Col key={product._id} xs={6} md={4} xl={3} className="mx-auto">
                        <div className="border shadow-sm p-2 h-100">
                            <div className="bg-secondary mb-2">
                                <img src={product.kbImage} alt="" height="100" className="d-block mx-auto" style={{ maxWidth: "100%" }} />
                            </div>
                            <h6>{product.kbName}</h6>
                            <button onClick={() => { handleProductDelete(product._id) }} className="btn btn-danger py-0 px-3">Delete</button>
                        </div>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;