import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'reactjs-popup/dist/index.css';
import { singleCourseStart } from '../redux/actions/singleCourse.action'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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
    }, [course, paymentUrl, _id, user?._id, dispatch]);

    const onCloseModel = () => {
        handleClose()
    }

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
                                <div id="curriculum" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="faq-sec">
                                                <div className="panel-group" id="accordion" role="tablist">
                                                    <div className="panel">
                                                        <div className="panel-heading" role="tab" id="titleOne">
                                                            <h4 className="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion"
                                                                    href="#collapseOne" aria-expanded="true"
                                                                    aria-controls="collapseOne">
                                                                    Learn Start Basic</a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                                                            aria-labelledby="titleOne">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei
                                                                    aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 1.1
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 1.2
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 1.3
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel">
                                                        <div className="panel-heading" role="tab" id="titleTwo">
                                                            <h4 className="panel-title">
                                                                <a className="collapsed" data-toggle="collapse"
                                                                    data-parent="#accordion" href="#collapseTwo"
                                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                                    Learn Advance Level</a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                                            aria-labelledby="titleTwo">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei
                                                                    aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 2.1
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 2.2
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 2.3
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel">
                                                        <div className="panel-heading" role="tab" id="titleThree">
                                                            <h4 className="panel-title">
                                                                <a className="collapsed" data-toggle="collapse"
                                                                    data-parent="#accordion" href="#collapseThree"
                                                                    aria-expanded="false" aria-controls="collapseThree">
                                                                    More Advance Level</a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
                                                            aria-labelledby="titleThree">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei
                                                                    aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 3.1
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 3.2
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 3.3
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="instructor" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="/assets/img/panel.png" alt="logo" width={100} height={140} />

                                                </div>
                                                <div className="details">
                                                    <h2 className='text-light'>{course?.instructor ? `${course.instructor}` : 'Not show'}</h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem pp delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi
                                                        delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel
                                                        quas everti insolens cu, duo harum feugiat an.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="coruse_review" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="https://feedthenationplus.org/education/public/assets/img/client2.png"
                                                        alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2 classNameName='text-light'>{course?.instructor ? `${course.instructor}` : 'Not show'}</h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi
                                                        delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel
                                                        quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="https://feedthenationplus.org/education/public/assets/img/client1.png"
                                                        alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2 classNameName='text-light'>{course?.instructor ? `${course.instructor}` : 'Not show'}</h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi
                                                        delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel
                                                        quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="https://feedthenationplus.org/education/public/assets/img/client3.png"
                                                        alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2 classNameName='text-light'>{course?.instructor ? `${course.instructor}` : 'Not show'}</h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi
                                                        delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel
                                                        quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="write_review" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="review-form">
                                                <div className="contact-page-form">
                                                    <h2>Write Your Review</h2>
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
                                        <Box sx={{ width: 700 }} className="d-flex justify-content-between  pay-shadow">

                                            <section>
                                                <div className='pay-img'>
                                                    <img src='/assets/img/bg_1.jpg' alt='img' />
                                                </div>
                                            </section>
                                            <section id="parent-modal-description" className='pay-form'>
                                                <div className='d-flex justify-content-end text-right' >
                                                    <FontAwesomeIcon className='x-mark p-2' icon={faXmark}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={onCloseModel}
                                                    />
                                                </div>
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
