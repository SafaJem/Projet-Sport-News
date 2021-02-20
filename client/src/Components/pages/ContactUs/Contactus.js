import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavBar from '../../NavBar/navBar';
import './contactus.css';

const Contactus = () => {
    return (
        <div>
        <NavBar/>
        <footer className="footer">
            <div className="footer-wrapper p-5" id="contact">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="footer-content container p-5">
                            <h2>Are you passionate about sport? On our site you will find all the sport news...</h2>
                            <p>
                            for more news, join us
                            </p>
                            <Link to="/Signup"> <Button type="submit" variant="success" className="btn btn-custom">
                                    Sign Up
                                </Button></Link> 
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="footer-form pt-5">
                            <form>
                                <div className="form-group ">
                                    <input
                                        type="email"
                                        className="form-control p-4"
                                        placeholder="write your Email address"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control p-4"
                                        placeholder="write  Your Company / your name "
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control p-4"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <Button type="submit" variant="success" className="btn btn-custom">
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="m-auto text-center m-5 p-5">
                copy &copy; GO MY CODE 2021
            </h6>
        </footer>
   </div> );
};
export default Contactus;