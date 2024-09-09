import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import ROLE from '../common/role';
// import { findBlogCategoryAndSubcategoryStart } from '../redux/actions/blogs/blogGetCategoryAndSubcategory.action';
import { logoutUserStart } from '../redux/actions/logoutUser.action';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { uploadInquiryStart } from '../redux/actions/addToInquiry.action';
import { getAllCourseStart } from '../redux/actions/getCourses.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const user = useSelector((state) => state.user.user);
    const isAdmin = user?.role === ROLE.ADMIN;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allCourse = useSelector((state) => state.allCourse?.allCourse)

    const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);
    const [open, setOpen] = React.useState(false);
    const initialInquiryData = {
        courseId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        message: ""
    };
    const [inquiryData, setInquiryData] = useState(initialInquiryData)



    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // find blogs category and subcategory wise
    const separateCoursesByCategory = () => {
        const categorizedCourses = {};
        courses.forEach((category) => {
            const categoryName = category._id;

            if (!categorizedCourses[categoryName]) {
                categorizedCourses[categoryName] = [];
            }
            category.subcategories.forEach((subcategory) => {
                subcategory.courses.forEach((course) => {
                    categorizedCourses[categoryName].push(course);
                });
            });
        });

        return categorizedCourses;
    };

    const categorizedCourses = separateCoursesByCategory();

    useEffect(() => {
        dispatch(getAllCourseStart())
        const timer = setTimeout(() => {
            handleOpen();
        }, 3000);

        return () => clearTimeout(timer);
    }, [dispatch])

    // user log out handller
    const handleLogOutUser = () => {
        dispatch(logoutUserStart())
        setTimeout(() => {
            navigate('/sign-in')
        }, 1000)
    }

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
        setTimeout(() => {
            handleClose()
        }, 2000)
    }

    const onCloseModel=()=>{
        handleClose()
    }


    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-8">
                            <div className="header-left">
                                <ul>
                                    <li><i className="fa fa-phone"></i>+00 0123456789</li>
                                    <li><i className="fa fa-envelope-o"></i><Link to="/" className="__cf_email__"
                                        data-cfemail="9af3f4fcf5daf6fffbe8fbeae8ffe9e9b4f9f5f7">admin@fmail.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-4">
                            <div className="header-right-div">
                                <div className="soical-profile">
                                    <span className="social-title">Follow Us</span>
                                    <ul>
                                        <li>
                                            <Link to="/"><i className="fa fa-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-google"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-skype"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hd-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-8">
                            <div className="logo">
                                <Link to="/"><img src="assets/img/logo.png" width="100"
                                    className="mt-3" alt="img" /></Link>
                            </div>
                        </div>

                        <div className="mobile-nav-menu"></div>
                        <div className="col-md-7 col-sm-9 menu-center">
                            <div className="menu">
                                <nav id="main-menu" className="main-menu">
                                    <ul>
                                        <li className="active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/course">Course</Link></li>
                                        <li><Link to="/services">Services</Link>
                                            <ul>
                                                {
                                                    (categorizedCourses["Navbar-services"] || []).map((course, index) => (
                                                        <li key={index}><Link to={`/category/${course._id}`}>{course.name}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li><Link to="/contact-us">Contact</Link></li>

                                        <li>
                                            {
                                                user?._id ? (
                                                    <Link onClick={handleLogOutUser} to={'/sign-in'} >Logout</Link>
                                                ) : (<Link to='/sign-in'>Login</Link>)
                                            }

                                            {/* <Link to="/sign-in">Login</Link> */}
                                        </li>
                                        {isAdmin && (
                                            <li><Link to="/admin-dashboard">Admin panel</Link></li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-3 applay-button-area">
                            <div className="applay-button">
                                <Link onClick={handleOpen}>Apply Now</Link>
                            </div>
                        </div>
                        <div className='container'>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >

                                <Box sx={{ width: 700 }} className="d-flex justify-content-between  pay-shadow" >
                                    <section>
                                        <div className='pay-img'>
                                            <img src='/assets/img/inquiry.jpg' alt='img'/>
                                        </div>
                                    </section>
                                    <section id="parent-modal-description" className='pay-form'>
                                        <div className="row">
                                            <div className="col-md-12 text-dark ">
                                                <div className='d-flex justify-content-between' >
                                                    <h1 className='text-center p-3'>Inquiry now</h1>
                                                    <FontAwesomeIcon className='x-mark p-2' icon={faXmark}
                                                    onClick={onCloseModel}
                                                    />
                                                </div>
                                                <form onSubmit={inquiryHandller}>
                                                    <div className="col-md-12 mb-3">
                                                        <input
                                                            placeholder='Enter name'
                                                            type="text"
                                                            name="name"
                                                            onChange={inputChange}
                                                            value={inquiryData.name}
                                                            className="form-control form-control-lg"
                                                            required
                                                        />
                                                    </div>
                                                    <div className='col-md-12 mb-3'>

                                                        <input
                                                            placeholder='Enter email'
                                                            type="text"
                                                            name="email"
                                                            value={inquiryData.email}
                                                            onChange={inputChange}
                                                            className="form-control form-control-lg"
                                                            required
                                                        />
                                                    </div>
                                                    <div className='col-md-12 mb-3'>
                                                        <select name="gender" value={inquiryData.gender} onChange={inputChange} className='form-control'>
                                                            <option value="">Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-md-12 mb-3'>
                                                        <input
                                                            placeholder='Enter phone'
                                                            type="number"
                                                            name="phone"
                                                            value={inquiryData.phone}
                                                            onChange={inputChange}
                                                            className="form-control form-control-lg"
                                                            required
                                                        />
                                                    </div>


                                                    <div className='col-md-12 mb-3'>
                                                        <select name="courseId" value={inquiryData.courseId} onChange={inputChange} className="form-control course-name form-control-lg">
                                                            {
                                                                allCourse?.map((course) => (
                                                                    <option key={course._id} value={course?._id} className='course-name'>{course?.name}</option>

                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className='col-md-12 mb-3'>
                                                        <div data-mdb-input-init className="form-outline mb-4">
                                                            <textarea
                                                                placeholder='Your message'
                                                                className='form-control'
                                                                type="text"
                                                                rows={3}
                                                                name="message"
                                                                value={inquiryData.message}
                                                                onChange={inputChange}
                                                            >
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 mb-3'>
                                                        <div className="d-flex justify-content-center">
                                                            <button className="btn btn-warning btn-lg">Inquiry now</button>
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
        </header>
    )
}
