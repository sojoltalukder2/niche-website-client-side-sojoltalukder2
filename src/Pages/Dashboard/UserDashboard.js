import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MyOrders from './MyOrders';
import MakeReview from './MakeReview';
import Pay from './Pay';

const UserDashboard = ({ userInfo }) => {
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

                        <Link to={`${url}/my-orders`}>
                            <div className="bg-white mb-2 mt-5 p-2 fw-bold">
                                My Orders
                            </div>
                        </Link>
                        <Link to={`${url}/make-review`}>
                            <div className="bg-white mb-2 p-2 fw-bold">
                                Review
                            </div>
                        </Link>
                        <Link to={`${url}/payment`}>
                            <div className="bg-white mb-5 p-2 fw-bold">
                                Pay
                            </div>
                        </Link>

                        <div className="text-center mt-3" >
                            <button className="btn btn-outline-light" onClick={handleSignOut}>Log Out</button>
                        </div>
                    </Col>
                    <Col xs={12} lg={8} xl={9} className="">
                        <Switch>
                            <Route exact path={`${path}/`}>
                                <MyOrders userInfo={userInfo} />
                            </Route>
                            <Route path={`${path}/my-orders`}>
                                <MyOrders userInfo={userInfo} />
                            </Route>
                            <Route path={`${path}/make-review`}>
                                <MakeReview userInfo={userInfo} />
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Pay />
                            </Route>
                        </Switch>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default UserDashboard;