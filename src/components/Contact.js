import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fname: "",
            fmail: "",
            fphone: "",
            fmsg: "",
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({ isRedirect: true });
    }
    getData = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                {this.state.isRedirect && <Redirect to="/" />}
                <header className="masthead tintuc mb-2">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5 tieude">Trang tin liên hệ</h1>
                                    {/* <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="page-section" id="contact">
                    <div className="container">
                        {/* Contact Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0"><b> Contact Us</b> </h2>
                        {/* Contact Section Form*/}
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input onChange={this.getData} name="fname" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input onChange={this.getData} name="fmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input onChange={this.getData} name="fphone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea onChange={this.getData} name="fmsg" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" />
                                    <div className="form-group"><button className="btn btn-warning btn-xl" id="sendMessageButton" type="submit" onClick={this.submitForm}>Send</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;