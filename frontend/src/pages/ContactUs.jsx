import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className="pagehding-sec">
                <div className="images-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1>contact us</h1>
                            </div>
                            <div className="breadcrumb-list">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">page</a></li>
                                    <li><a href="#">contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact-page-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="contact-page-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2975069060017!2d7.482243914105086!3d9.036602491359641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b9d2f7b1831%3A0x31b6a668f94eac2f!2sLozumba%20Complex!5e0!3m2!1sen!2sin!4v1655543469127!5m2!1sen!2sin" width="100%" height="350" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>address</h2>
                                        <span>SUITE 304 AND 305 LOZUMBA COMPLEX NO. 6 AWKA STREET AREA 10 GARKI ABUJA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>e-mail</h2>
                                        <span><a href="https://themeearth.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="83e0eceef3e2edfac3e4eee2eaefade0ecee">[email&#160;protected]</a></span>
                                        <span><a href="https://themeearth.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7d0412080f101c14113d1a101c1411531e1210">[email&#160;protected]</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>office time</h2>
                                        <span>Mon - Sat 9:00 am - 6.00 pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact-page-form">
                                <h2>Send your message</h2>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="single-input-field">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="single-input-field">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="single-input-field">
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="single-input-field">
                                        <input type="email" placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className="col-md-12 message-input">
                                    <div className="single-input-field">
                                        <textarea placeholder="Write Your Message"></textarea>
                                    </div>
                                </div>
                                <div className="single-input-fieldsbtn">
                                    <input type="submit" value="Send Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
