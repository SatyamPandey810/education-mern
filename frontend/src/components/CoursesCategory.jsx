import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singleCourseStart } from '../redux/actions/singleCourse.action'
import { useParams } from 'react-router-dom';
import { uploadInquiryStart } from '../redux/actions/addToInquiry.action';
import { getAllCourseStart } from '../redux/actions/getCourses.action';


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

    return (
        <>
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='course-img'>
                            <img src={course?.image} alt='image' />
                        </div>
                        <div className='choose-cat'>
                            <h1>Choose from any of the courses below and start studying </h1>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <ul>
                                        <li> <i class="gdlr-core-icon-list-icon-hover fa fa-check gdlr-core-skin-e-content" style={{ color: "#fdb900", fontSize: "18px" }}></i>  Lorem ipsum dolor</li>
                                        <li> <i class="gdlr-core-icon-list-icon-hover fa fa-check gdlr-core-skin-e-content" style={{ color: "#fdb900", fontSize: "18px" }}></i>  Lorem ipsum dolor</li>
                                        <li> <i class="gdlr-core-icon-list-icon-hover fa fa-check gdlr-core-skin-e-content" style={{ color: "#fdb900", fontSize: "18px" }}></i>  Lorem ipsum dolor</li>
                                        <li> <i class="gdlr-core-icon-list-icon-hover fa fa-check gdlr-core-skin-e-content" style={{ color: "#fdb900", fontSize: "18px" }}></i>  Lorem ipsum dolor</li>

                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                    <div className="star-container">
                                        <svg className="star" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <div className="fee"> ₦ {course?.price}/-</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='course-pro'>
                            <h1>PROGRAM OVERVIEW</h1>
                            <h3>Who needs a {course?.name} ?</h3>
                        </div>
                        <div className='course-p'>
                            <p>{course?.description}</p>
                        </div>

                        <div className="h-100 mt-5 w-75" style={{ backgroundColor: "rgb(69 148 197 / 92%)" }}>
                            <div className="row h-100">

                                <div className="card card-registration">
                                    <div className="row g-0">
                                        <div className="col-xl-6">
                                            <div className="card-body p-md-5 text-black">
                                                <h2 className="mb-3 text-uppercase">Student registration form</h2>
                                                <form onSubmit={inquiryHanleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <div data-mdb-input-init className="form-outline">
                                                                <label className="form-label" htmlFor="name">Name</label>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    onChange={inputChange}
                                                                    value={inquiryData.name}
                                                                    className="form-control form-control-lg"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
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
                                                        <div className='col-md-12'>
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
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
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
                </div >


            </div >
            <div className='row mb-4'>
                <div className='col-md-12'>
                    <div className="count-up-sec">
                        <div className="count-up-sec-overlay"></div>
                        <div className="container">
                            <div className="row">

                                <div className="col-md-3 col-sm-6 col-xs-6 inner">
                                    <div className="count-up-inner">
                                        <div className="count-up-icon">
                                            <i class="fa fa-credit-card-alt" style={{ color: "yellow" }}></i>
                                        </div>
                                        <div className="countup-text">
                                            <h2 className="counters">Free</h2>
                                            <h4>Course fee:</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 inner">
                                    <div className="count-up-inner">
                                        <div className="count-up-icon">
                                            <i class="fa fa-file" style={{ color: "#8224e3" }}></i>
                                        </div>
                                        <div className="countup-text">
                                            <h2 className="counter" style={{ color: "#8224e3" }}>Paid</h2>
                                            <h4>CERTIFICATES FEE:</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 inner">
                                    <div className="count-up-inner">
                                        <div className="count-up-icon">
                                            <i class="gdlr-core-pos-left fa fa-mortar-board" style={{ fontSize: "50px", color: "green" }}></i>
                                        </div>
                                        <div className="countup-text">
                                            <h2 className="counter" style={{ color: "green" }}>free</h2>
                                            <h4>Studying fee:</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6 col-xs-6 inner">
                                    <div className="count-up-inner">
                                        <div className="count-up-icon">
                                            <img src="assets/img/icon/medal.png" alt="" />
                                        </div>
                                        <div className="countup-text">
                                            <h2 className="counter">824</h2>
                                            <h4>award winner</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
