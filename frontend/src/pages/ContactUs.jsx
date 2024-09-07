import React, { useEffect, useState } from 'react'
import { uploadInquiryStart } from '../redux/actions/addToInquiry.action';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourseStart } from '../redux/actions/getCourses.action';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export default function ContactUs() {
    const dispatch = useDispatch()
    const initialInquiryData = {
        courseId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        message: ""
    };
    const [inquiryData, setInquiryData] = useState(initialInquiryData)
    const allCourse = useSelector((state) => state.allCourse?.allCourse)
    const inputChange = (event) => {
        const { name, value } = event.target;
        setInquiryData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    // inquiry uploadHndller
    const inquiryHandller = async (event) => {
        event.preventDefault()
        dispatch(uploadInquiryStart(inquiryData))
        setInquiryData(initialInquiryData);

    }
    useEffect(() => {
        dispatch(getAllCourseStart())

    }, [dispatch])

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
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/contact-us">contact us</Link></li>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2975069060017!2d7.482243914105086!3d9.036602491359641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b9d2f7b1831%3A0x31b6a668f94eac2f!2sLozumba%20Complex!5e0!3m2!1sen!2sin!4v1655543469127!5m2!1sen!2sin" title='example' width="100%" height="350" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
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
                                        <span><Link to="https://themeearth.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="83e0eceef3e2edfac3e4eee2eaefade0ecee">[email&#160;protected]</Link></span>
                                        <span><Link to="https://themeearth.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7d0412080f101c14113d1a101c1411531e1210">[email&#160;protected]</Link></span>
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
                                <form onSubmit={inquiryHandller}>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input
                                                placeholder='Enter name'
                                                type="text"
                                                name="name"
                                                onChange={inputChange}
                                                value={inquiryData.name}
                                                className="form-control form-control-lg border"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-12 mb-3'>
                                        <div className="single-input-field">
                                            <select name="gender" value={inquiryData.gender} onChange={inputChange} className='form-control border'>
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input
                                                placeholder='Enter phone'
                                                type="number"
                                                name="phone"
                                                value={inquiryData.phone}
                                                onChange={inputChange}
                                                className="form-control form-control-lg border"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input
                                                placeholder='Enter email'
                                                type="text"
                                                name="email"
                                                value={inquiryData.email}
                                                onChange={inputChange}
                                                className="form-control form-control-lg border"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6  mb-3">
                                        <div className="single-input-field">
                                            <textarea
                                                placeholder='Your message'
                                                className='form-control form-control-lg border'
                                                type="text"
                                                // rows={3}
                                                // cols={4}
                                                name="message"
                                                value={inquiryData.message}
                                                onChange={inputChange}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="single-input-field">
                                            <select name="courseId" value={inquiryData.courseId} onChange={inputChange} className="form-control course-name form-control-lg border">
                                                {
                                                    allCourse?.map((course) => (
                                                        <option key={course._id} value={course?._id} className='course-name'>{course?.name}</option>

                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="single-input-fieldsbtn">
                                        <input type="submit" value="Send Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Get In Touch</h5>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                <i class="fa fa-map-marker"></i>
                                </div>
                                <div className="mx-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="mx-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                <i class="fa fa-envelope"></i>
                                </div>
                                <div className="mx-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" style={{ minHeight: "300px", border: "0" }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={inquiryHandller}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <label for="name">Your Name</label><br />
                                            <input
                                                placeholder='Enter name'
                                                type="text"
                                                name="name"
                                                onChange={inputChange}
                                                value={inquiryData.name}
                                                classNameName="form-control form-control-lg border"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <label for="email">Your Email</label><br />
                                            <input
                                                placeholder='Enter email'
                                                type="text"
                                                name="email"
                                                value={inquiryData.email}
                                                onChange={inputChange}
                                                classNameName="form-control form-control-lg border"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-floating">
                                            <label for="subject">Phone</label><br/>
                                            <input
                                                placeholder='Enter phone'
                                                type="number"
                                                name="phone"
                                                value={inquiryData.phone}
                                                onChange={inputChange}
                                                classNameName="form-control form-control-lg border"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-floating">
                                            <label for="subject">Gender</label><br/>
                                            <select name="gender" value={inquiryData.gender} onChange={inputChange} classNameName='form-control border'>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-floating">
                                            <label for="subject">Course</label><br/>
                                            <select name="courseId" value={inquiryData.courseId} onChange={inputChange} classNameName="form-control course-name form-control-lg border">
                                                {
                                                    allCourse?.map((course) => (
                                                        <option key={course._id} value={course?._id} classNameName='course-name'>{course?.name}</option>

                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <label for="message">Message</label><br/>
                                            <textarea
                                                placeholder='Your message'
                                                classNameName='form-control border'
                                                type="text"
                                                rows={3}
                                                name="message"
                                                value={inquiryData.message}
                                                onChange={inputChange}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
