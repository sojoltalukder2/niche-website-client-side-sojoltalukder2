import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-100 mt-5 py-3 flex-shrink-0">
            <div className="container py-2">
                <div className="row gy-4 gx-5">
                    <hr />
                    <div className="col-lg-4 col-md-6">
                        <h5 className="fw-bolder h1 text-white">Keyboard Hub</h5>
                        <p className="small text-muted">Keyboard Hub gaming keyboards power top esports professionals with features like CHERRY mechanical keyswitches.</p>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Contact Us</h5>
                        <ul className="list-unstyled text-muted">
                            623 Harrison St<br />
                            San Francisco, CA 94107 <br />
                            415-201-6370 <br />
                            info@keyboardhub.com <br />
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <Link to="/home"><li>Home</li></Link>
                            <Link to="/login"><li>Login</li></Link>
                            <Link to="/keyboards"><li>All Keyboards</li></Link>
                            <Link to="/home"><li>FAQ</li></Link>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Newsletter</h5>
                        <p className="small text-muted">Sign up for our newsletter to get keyboards related tips every month.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Recipient's Email" aria-label="Recipient's Email" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" id="button-addon2" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;