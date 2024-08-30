import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { singleCourseStart } from '../redux/actions/singleCourse.action'
import { useParams } from 'react-router-dom';
import { uploadInquiryStart } from '../redux/actions/addToInquiry.action';
import { getAllCourseStart } from '../redux/actions/getCourses.action';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from "mdb-react-ui-kit";

export default function CoursesCategory() {
    const { id: _id } = useParams();
    const dispatch = useDispatch()
    const course = useSelector((state) => state.singleCourse.course)
    // const allCourse = useSelector((state) => state.allCourse?.allCourse)
    const initialInquiryData = {
        name: "",
        email: "",
        phone: "",
        courseName: course?.name || '',
        courseId: _id,
        gender: '',
        message: ""
    }
    const [inquiryData, setInquiryData] = useState(initialInquiryData)



    useEffect(() => {
        if (_id) {
            dispatch(singleCourseStart(_id));
        }
        // dispatch(getAllCourseStart())

    }, [dispatch, _id])


    const inputChange = (event) => {
        const { name, value } = event.target;
        setInquiryData({ ...inquiryData, [name]: value });
    }

    const inquiryHanleSubmit = async (event) => {
        event.preventDefault();

        dispatch(uploadInquiryStart(inquiryData));
        setInquiryData(initialInquiryData)
    }
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

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
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Course Details</a></li>
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
                                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Learn Start Basic</a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="titleOne">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
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
                                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Learn Advance Level</a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="titleTwo">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
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
                                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    More Advance Level</a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="titleThree">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
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
                                                    <img src="assets/img/client1.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><a href="#">David Max</a></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
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
                                                    <img src="assets/img/client2.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><a href="#">David Max</a></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="assets/img/client1.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><a href="#">David Max</a></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="assets/img/client3.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><a href="#">David Max</a></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
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
                                    {/* <a href="#">Get Course</a> */}
                                    <button onClick={togglePopup} className='btn btn-warning' >Open Popup</button>
                                    {isOpen && (
                                        <div className="popup">
                                            {/* <button onClick={togglePopup}>Close</button> */}
                                            <div className='p-2'>
                                                <div style={{ backgroundColor: "rgb(69 148 197 / 92%)" }}>
                                                    <div className="row">
                                                        <div className="card card-registration">
                                                            <div className='text-right'>
                                                                <FontAwesomeIcon className='x-mark' onClick={togglePopup} icon={faXmark}
                                                                />
                                                            </div>
                                                            <div className="row g-0">
                                                                <div className="col-xl-6">
                                                                    <div className="card-body p-md-5 text-black">
                                                                        <h2 className="mb-3 text-uppercase">Student registration form</h2>
                                                                        <form onSubmit={inquiryHanleSubmit}>
                                                                            <div className="row">
                                                                                <div className="col-md-6 mb-4">
                                                                                    <label className="form-label" htmlFor="name">Name</label>
                                                                                    <input
                                                                                        type="text"
                                                                                        name="name"
                                                                                        onChange={inputChange}
                                                                                        value={inquiryData.name}
                                                                                        className="form-control form-control-lg"
                                                                                    />
                                                                                </div>
                                                                                <div className='col-md-6'>
                                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                                        <label className="form-label" htmlFor="email">Email ID</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name="email"
                                                                                            value={inquiryData.email}
                                                                                            onChange={inputChange}
                                                                                            className="form-control form-control-lg"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className='row'>
                                                                                <div className='col-md-6'>
                                                                                    <div className="form-flex">
                                                                                        <div>
                                                                                            <label className="form-label" htmlFor="gender">Gender:</label>
                                                                                        </div>
                                                                                        <div className="form-check form-check-inline mb-0 me-4 d-flex align-items-center">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="radio"
                                                                                                name="gender"
                                                                                                value="Male"
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
                                                                                            type="number"
                                                                                            name="phone"
                                                                                            value={inquiryData.phone}
                                                                                            onChange={inputChange}
                                                                                            className="form-control form-control-lg"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row'>

                                                                            </div>
                                                                            <div className='row'>
                                                                                <div className='col-md-12'>
                                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                                        <label className="form-label" htmlFor="course">Course</label>
                                                                                        <select name="courseName" value={inquiryData.courseName} onChange={inputChange} className="form-control form-control-lg">
                                                                                            <option value="">{course?.name}</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row'>
                                                                                <div className='col-md-12'>
                                                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                                                        <label className="form-label" htmlFor="message">Message</label><br />
                                                                                        <textarea
                                                                                            className='form-control'
                                                                                            type="text"
                                                                                            rows={5}
                                                                                            name="message"
                                                                                            value={inquiryData.message}
                                                                                            onChange={inputChange}>
                                                                                        </textarea>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-md-12 mb-3'>
                                                                                <div className="d-flex justify-content-center pt-3">
                                                                                    <button className="btn btn-warning btn-lg ms-2 mx-3">Submit form</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
