import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singleCourseStart } from '../redux/actions/singleCourse.action'
import { useParams } from 'react-router-dom';

export default function CoursesCategory() {
    const { id: _id } = useParams();
    const dispatch = useDispatch()
    const course = useSelector((state) => state.singleCourse.course)
    // const allCourse = useSelector((state) => state.allCourse?.allCourse)
    useEffect(() => {
        if (_id) {
            dispatch(singleCourseStart(_id));
        }
    }, [dispatch, _id])

    console.log(allCourse);
    // const singleCourse = course ? allSubCategory.data : [];
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

                        <div className="h-100 mt-5" style={{ backgroundColor: "rgb(69 148 197 / 92%)" }}>
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div>
                                    <div className="card card-registration">
                                        <div className="row g-0">
                                            <div className="col-xl-6">
                                                <div className="card-body p-md-5 text-black">
                                                    <h2 className="mb-3 text-uppercase">Student registration form</h2>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <label className="form-label" for="form3Example1m">First name</label>
                                                            <div data-mdb-input-init className="form-outline">
                                                                <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div data-mdb-input-init className="form-outline">
                                                                <label className="form-label" for="form3Example1n">Last name</label>
                                                                <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                        <label className="form-label" for="form3Example97">Email ID</label>
                                                        <input type="text" id="form3Example97" className="form-control form-control-lg" />
                                                    </div>
                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                        <label className="form-label" for="form3Example99">Course</label>
                                                        <input type="text" id="form3Example99" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="form-flex">
                                                        <div>
                                                            <label className="form-label" for="form3Example8">Gender:</label>
                                                        </div>


                                                        <div className="form-check form-check-inline mb-0 me-4 d-flex align-items-center">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                                value="option1" />&nbsp;
                                                            <span className="form-check-label" for="femaleGender">Male</span>
                                                        </div>

                                                        <div className="form-check form-check-inline mb-0 me-4 d-flex align-items-center">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                                value="option2" />&nbsp;
                                                            <span className="form-check-label" for="maleGender">Female</span>
                                                        </div>

                                                        <div className="form-check form-check-inline mb-0 d-flex align-items-center">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                                value="option3" />&nbsp;
                                                            <span className="form-check-label" for="otherGender">Other</span>
                                                        </div>

                                                    </div>
                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                        <label className="form-label" for="form3Example8">Address</label>
                                                        <input type="text" id="form3Example8" className="form-control form-control-lg" />
                                                    </div>
                                                    <div data-mdb-input-init className="form-outline mb-4">
                                                        <label className="form-label" for="form3Example90">Pincode</label>
                                                        <input type="text" id="form3Example90" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">

                                                            <select data-mdb-select-init>
                                                                <option value="1">State</option>
                                                                <option value="2">Option 1</option>
                                                                <option value="3">Option 2</option>
                                                                <option value="4">Option 3</option>
                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-4">

                                                            <select data-mdb-select-init>
                                                                <option value="1">City</option>
                                                                <option value="2">Option 1</option>
                                                                <option value="3">Option 2</option>
                                                                <option value="4">Option 3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center pt-3">
                                                        <button className="btn btn-light btn-lg">Reset all</button>
                                                        <button className="btn btn-warning btn-lg ms-2 mx-3">Submit form</button>
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


            </div>
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
