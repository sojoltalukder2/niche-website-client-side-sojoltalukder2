import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AddProduct from './AddProduct';
import MakeAdmin from './MakeAdmin';
import ManageAllOrders from './ManageAllOrders';
import ManageProducts from './ManageProducts';

const AdminDashboard = ({ userInfo }) => {
    const { handleSignOut } = useAuth();

    const { path, url } = useRouteMatch();
    return (
        <div>
            <Container className="mt-5 border shadow-lg">
                <Row>
                    <Col xs={12} lg={3} xl={2} className="bg-secondary py-3">
                        <div className="text-center bg-light mx-auto" style={{ width: "80px", borderRadius: "50%" }}>
                            <img src={userInfo.uImage} style={{ width: "80px", borderRadius: "50%" }} alt="" />
                        </div>
                        <h4 className="text-center text-light fw-bold mt-2">{userInfo.uName}</h4>
                        <h6 className="text-center text-light fw-bold mt-2">{userInfo.uEmail}</h6>

                        <Link to={`${url}/manage-orders`}>
                            <div className="bg-white mb-2 mt-5 p-2 fw-bold">
                                Manage All Orders
                            </div>
                        </Link>
                        <Link to={`${url}/add-product`}>
                            <div className="bg-white mb-2 p-2 fw-bold">
                                Add A Product
                            </div>
                        </Link>
                        <Link to={`${url}/make-admin`}>
                            <div className="bg-white mb-2 p-2 fw-bold">
                                Make Admin
                            </div>
                        </Link>

                        <Link to={`${url}/manage-products`}>
                            <div className="bg-white mb-5 p-2 fw-bold">
                                Manage Products
                            </div>
                        </Link>

                        <div className="text-center mt-3" >
                            <button className="btn btn-outline-light" onClick={handleSignOut}>Log Out</button>
                        </div>
                    </Col>
                    <Col xs={12} lg={8} xl={9} className="">
                        <Switch>
                            <Route exact path={`${path}/`}>
                                <ManageAllOrders />
                            </Route>
                            <Route path={`${path}/manage-orders`}>
                                <ManageAllOrders />
                            </Route>
                            <Route path={`${path}/add-product`}>
                                <AddProduct />
                            </Route>
                            <Route path={`${path}/make-admin`}>
                                <MakeAdmin />
                            </Route>
                            <Route path={`${path}/manage-products`}>
                                <ManageProducts />
                            </Route>
                        </Switch>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default AdminDashboard;