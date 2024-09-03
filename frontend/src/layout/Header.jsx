import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import ROLE from '../common/role';
import { findBlogCategoryAndSubcategoryStart } from '../redux/actions/blogs/blogGetCategoryAndSubcategory.action';
import { logoutUserStart } from '../redux/actions/logoutUser.action';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function Header() {
    const user = useSelector((state) => state.user.user);
    const isAdmin = user?.role === ROLE.ADMIN;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);
    const [open, setOpen] = React.useState(false);
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
        dispatch(findBlogCategoryAndSubcategoryStart())

    }, [dispatch])

    // user log out handller
    const handleLogOutUser = () => {
        dispatch(logoutUserStart())
        setTimeout(() => {
            navigate('/sign-in')
        }, 1000)
    }

    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

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
                                    className="mt-3" alt="" /></Link>
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
                                        <li><Link to="/gallery">gallery</Link></li>
                                        <li><Link to="/contact-us">Contact</Link></li>

                                        <li>
                                            {
                                                user?._id ? (
                                                    <Link onClick={handleLogOutUser} to={'/login'} >Logout</Link>
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
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 400 }}>
                                <h2 id="parent-modal-title">Text in a modal</h2>
                                <p id="parent-modal-description">
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </p>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </header>
    )
}
