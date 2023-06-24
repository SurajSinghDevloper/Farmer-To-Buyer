import React from 'react';
import './style.css'
import { Layout } from '../../components/Layout/Index';

const ContactUs = () => {
    return (
        <Layout>
            <div className="content mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <h3 className="heading mb-4">Let's talk about everything!</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
                                    <p>
                                        <img className="img-fluid" src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg" alt="Images" />
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <form className="mb-5 form" method="post" id="contactForm" name="contactForm">
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                                                <span className="submitting"></span>
                                            </div>
                                        </div>
                                    </form>
                                    <div id="form-message-warning mt-4"></div>
                                    <div id="form-message-success">
                                        Your message was sent, thank you!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactUs;
