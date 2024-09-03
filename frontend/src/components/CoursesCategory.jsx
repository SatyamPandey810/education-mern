import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'reactjs-popup/dist/index.css';
import { singleCourseStart } from '../redux/actions/singleCourse.action'
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { initiatePaymentStart } from '../redux/actions/transactions/transactionInitiate.action';

export default function CoursesCategory() {
    const { id: _id } = useParams();
    const dispatch = useDispatch()
    const course = useSelector((state) => state.singleCourse.course)
    const user = useSelector((state) => state.user.user);   
    const paymentUrl = useSelector((state) => state.transactionUpload.paymentUrl)
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        courseId: '',
        gender: '',
        message: "",
        amount: course?.price || 0,
        userId: '',
    }
    const [formData, setFormData] = useState(initialFormData)
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  

   

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "37%",
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        // dispaly:"flex",
        boxShadow: 24,
        // pt: 2,
        // px: 4,
        // pb: 3,
        borderRadius: "10px"

    };
    const inputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }


    // payment handller 
    const paymentHandleSubmit = async (event) => {
        event.preventDefault()
        dispatch(initiatePaymentStart(formData))
    }


    useEffect(() => {
        if (course) {
            setFormData((prevData) => ({
                ...prevData,
                amount: course?.price || 0,
                courseId: course?._id || '',
                userId: user?._id,

            }));
        }
        if (paymentUrl) {
            window.location.href = paymentUrl;
        }
        if (_id) {
            dispatch(singleCourseStart(_id));
        }
    }, [course, paymentUrl, _id, dispatch]);

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
                                    <button onClick={handleOpen} className='btn btn-warning p-2 fs-3' >Get course</button>

                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="parent-modal-title"
                                        aria-describedby="parent-modal-description"

                                    >
                                        <Box sx={{ ...style, width: 700 }} className="d-flex justify-content-between  pay-shadow">
                                            {/* <h2 className='text-center'>Get registration now</h2> */}
                                            <section>
                                                <div className='pay-img'>
                                                    <img src='/assets/img/bg_1.jpg' />
                                                </div>
                                            </section>
                                            <section id="parent-modal-description" className='pay-form'>
                                                <div className="row">
                                                    <div className="col-md-12 text-dark ">
                                                        <form onSubmit={paymentHandleSubmit}>
                                                            <div className="col-md-12">
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
                                                            <div className='col-md-12'>
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
                                                            <div className='col-md-12'>
                                                                <label className="form-label" htmlFor="email">Gender</label>
                                                                <select name="gender" value={formData.gender} onChange={inputChange} className='form-control'>
                                                                    <option value="">Select Gender</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                            <div className='col-md-12'>
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


                                                            <div className='col-md-12'>
                                                                <label className="form-label" htmlFor="courseId">Course</label>
                                                                <select name="courseId" value={formData.courseId} onChange={inputChange} className="form-control course-name form-control-lg">
                                                                    <option value={course?._id} className='course-name'>{course?.name}</option>
                                                                </select>
                                                            </div>
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
                                                            <div className='col-md-12 mb-3'>
                                                                <div className="d-flex justify-content-center">
                                                                    <button className="btn btn-success btn-lg">Pay now {course?.price} /-</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </section>

                                        </Box>
                                    </Modal>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
