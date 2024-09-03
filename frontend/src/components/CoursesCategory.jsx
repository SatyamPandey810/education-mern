import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { singleCourseStart } from '../redux/actions/singleCourse.action'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { uploadInquiryStart } from '../redux/actions/addToInquiry.action';

import { initiatePaymentStart } from '../redux/actions/transactions/transactionInitiate.action';
import summaryApi from '../common';
import { toast } from 'react-toastify';

export default function CoursesCategory() {
    const { id: _id } = useParams();
    const dispatch = useDispatch()
    const course = useSelector((state) => state.singleCourse.course)
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate()
    // const allCourse = useSelector((state) => state.allCourse?.allCourse)
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        // courseName: course?.name || '',
        courseId: '',
        gender: '',
        message: "",
        amount: course?.price || 0,
        // userId: '',
    }
    const [formData, setFormData] = useState(initialFormData)



    useEffect(() => {
        if (_id) {
            dispatch(singleCourseStart(_id));
        }
        // dispatch(getAllCourseStart())

    }, [dispatch, _id])


    const inputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }
    // const response = await fetch(summaryApi.paymentHandler.url, {

    const paymentHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(summaryApi.paymentHandler.url, {
                method: summaryApi.paymentHandler.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    paymentMethod,
                }),

            });

            const responseData = await response.json();
            console.log('responseData:', responseData);

            if (paymentMethod === 'online' && responseData.success && responseData.authorization_url) {
                window.location.href = responseData.authorization_url; // Redirect to payment gateway
            } else if (paymentMethod === 'cod' && responseData.success) {
                toast.success('Order placed successfully!'); // Success message for Cash on Delivery
                setTimeout(() => navigate('/success'), 1000); // Redirect after 1 second
            } else {
                toast.error(responseData.message || 'Payment method not selected or transaction failed!');
            }
        } catch (error) {
            console.error('Payment submission error:', error);
            toast.error(`An error occurred: ${error.message || 'Please try again.'}`);
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (course) {
            setFormData((prevData) => ({
                ...prevData,
                amount: course.price || 0,
                courseId: course._id || '',
            }));
        }
    }, [course]);
    return (
        <>
            <div className="pagehding-sec">
                <div className="images-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1>Course Details</h1>
                            </div>
                            <div className="breadcrumb-list">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="">Course Details</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-details-page pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="course-tab">
                                <ul className="service-tab">
                                    <li className="active"><a data-toggle="tab" href="#overview" aria-expanded="true">Course Overview</a></li>
                                    <li className=""><a data-toggle="tab" href="#curriculum" aria-expanded="false">Course Curriculum</a></li>
                                    <li className=""><a data-toggle="tab" href="#instructor" aria-expanded="false">Course Instructor</a></li>
                                    <li className=""><a data-toggle="tab" href="#coruse_review" aria-expanded="false">Course Review</a></li>
                                    <li className=""><a data-toggle="tab" href="#write_review" aria-expanded="false">Write Review</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tab-content">

                                <div id="overview" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="course-details">
                                                <img src={course?.image} alt="" />
                                                <h2 classNameName='text-lowercase'>{course?.name}</h2>
                                                <p>{course?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* there content */}



                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="event-details-info">
                                <h2>Course Info</h2>
                                <ul>
                                    <li>Instructor:<span>{course?.instructor ? `${course.instructor}` : 'Not show'}</span></li>

                                    <li>Lectures:<span>{course?.lectures ? `${course.lectures}` : 'Not show'}</span></li>
                                    <li>Quizzes:<span>0</span></li>
                                    <li>Seat Availble:<span>{course?.sheet}</span></li>
                                    <li>Duration:<span>{course?.duration ? `${course.duration}` : 'Not show'}</span></li>
                                    <li>Course Price:<span> ₦ {course?.price}</span></li>
                                    <li>Rating:<span><img src="assets/img/rating.png" alt="" /></span></li>
                                </ul>
                                <div className="get-coruse-btn">
                                    {/* <a href="#">Get Course</a> */}
                                    <button onClick={togglePopup} className='btn btn-warning p-2 fs-3' >Get course</button>
                                    {isOpen && (
                                        <div className="popup">
                                            {/* <button onClick={togglePopup}>Close</button> */}

                                            <div style={{ backgroundColor: "rgb(69 148 197 / 92%)" }}>
                                                <div className="row">
                                                    <div className="col-md-12 p-3 text-dark">
                                                        <div className='text-right'>
                                                            <FontAwesomeIcon className='x-mark' onClick={togglePopup} icon={faXmark}
                                                            />
                                                        </div>
                                                        <h2 className="mb-3 text-uppercase">Student registration form</h2>
                                                        <form onSubmit={paymentHandleSubmit} className='p-3'>
                                                            <div className='row'>
                                                                <div className="col-md-6">
                                                                    <label className="form-label" htmlFor="name">Name</label>
                                                                    <input
                                                                        placeholder='Enter name'
                                                                        type="text"
                                                                        name="name"
                                                                        onChange={inputChange}
                                                                        value={formData.name}
                                                                        className="form-control form-control-lg"
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                        <label className="form-label" htmlFor="email">Email ID</label>
                                                                        <input
                                                                            placeholder='Enter email'
                                                                            type="text"
                                                                            name="email"
                                                                            value={formData.email}
                                                                            onChange={inputChange}
                                                                            className="form-control form-control-lg"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className="">
                                                                        <div>
                                                                            <label className="form-label" htmlFor="gender">Gender:</label>
                                                                        </div>
                                                                        <div className="form-check form-check-inline mb-0 me-4 d-flex align-items-center">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="gender"
                                                                                value="Male"
                                                                                checked={formData.gender === 'Male'}
                                                                                onChange={inputChange}
                                                                            />&nbsp;
                                                                            <span className="form-check-label" htmlFor="Male">Male</span>
                                                                        </div>
                                                                        <div className="form-check form-check-inline mb-0 me-4 d-flex align-items-center">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="gender"
                                                                                value="Female"
                                                                                checked={formData.gender === 'Female'}
                                                                                onChange={inputChange}
                                                                            />&nbsp;
                                                                            <span className="form-check-label" htmlFor="Female">Female</span>
                                                                        </div>
                                                                        <div className="form-check form-check-inline mb-0 d-flex align-items-center">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="gender"
                                                                                value="Other"
                                                                                checked={formData.gender === 'Other'}
                                                                                onChange={inputChange}
                                                                            />&nbsp;
                                                                            <span className="form-check-label" htmlFor="Other">Other</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                        <label className="form-label" htmlFor="phone">Phone</label>
                                                                        <input
                                                                            placeholder='Enter phone'
                                                                            type="number"
                                                                            name="phone"
                                                                            value={formData.phone}
                                                                            onChange={inputChange}
                                                                            className="form-control form-control-lg"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                        <label className="form-label" htmlFor="courseId">Course</label>
                                                                        <select name="courseId" value={formData.courseId} onChange={inputChange} className="form-control form-control-lg">
                                                                            <option value={course?._id} className='text-lowercase'>{course?.name}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                        <label className="form-label" htmlFor="message">Message</label><br />
                                                                        <textarea
                                                                            placeholder='Your message'
                                                                            className='form-control'
                                                                            type="text"
                                                                            rows={3}
                                                                            name="message"
                                                                            value={formData.message}
                                                                            onChange={inputChange}>
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-md-6 d-flex justify-content-between'>
                                                                    <div className="form-check d-flex justify-content-between">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="paymentMethod"
                                                                            id="online"
                                                                            value="online"
                                                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                                                        />
                                                                        <label className="form-check-label text-nowrap" htmlFor="online">
                                                                            Online Payment
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check d-flex">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="paymentMethod"
                                                                            id="cod"
                                                                            value="cod"
                                                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                                                        />
                                                                        <label className="form-check-label text-nowrap" htmlFor="cod">
                                                                            Cash on Delivery
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12 mb-3'>
                                                                <div className="d-flex justify-content-center pt-3">
                                                                    <button className="btn btn-success btn-lg ms-2 mx-3">Pay now {course?.price} /-</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
