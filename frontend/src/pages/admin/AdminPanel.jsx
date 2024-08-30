import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import TotalUser from './TotalUser';
import AllCourses from './AllCourses';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserStart } from '../../redux/actions/logoutUser.action';
import ROLE from '../../common/role';
import AllCategorySubcategory from './AllCategory-Subcategory';
import Blog from './Blog';
import CourseUpdate from './updates/CourseUpdate';

export default function AdminPanel() {
    const [activeComponent, setActiveComponent] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleMenuClick = (TotalUser, AllCourses) => {
        setActiveComponent(TotalUser, AllCourses, AllCategorySubcategory, Blog, CourseUpdate);
    }
    const message = useSelector((state) => state.message?.message)
    const user = useSelector((state) => state.user.user);

    // console.log(message);

    const handleLogOutUser = () => {
        dispatch(logoutUserStart())
        setTimeout(() => {
            navigate('/sign-in')
        }, 1000)
    }

    useEffect(() => {
        console.log(user?.role);
        if (user && user.role !== ROLE.ADMIN) {
            navigate('/')
        }
    }, [user, navigate])



    return (
        <div className="container-scroller">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle " src="assets/img/panel.png" alt="" />
                                    <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h5 className="text-light text-capitalize">{user?.name}</h5>
                                    <span>Admin</span>
                                </div>
                            </div>
                            <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></a>
                            <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                                aria-labelledby="profile-dropdown">
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-onepassword  text-info"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar-today text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="index.html">
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faCalendarDays} className="text-primary" />
                            </span>
                            <span className="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('TotalUser')}>
                            <span className="menu-icon">
                                <i className="mdi mdi-playlist-play"></i>
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>User</span>
                        </span>

                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('AllCategorySubcategory')}>
                            <span className="menu-icon">
                                <i className="mdi mdi-chart-bar"></i>
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Category-subcategory</span>
                        </span>
                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('AllCourses')}>
                            <span className="menu-icon">
                                <i className="mdi mdi-table-large"></i>
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Courses</span>
                        </span>
                    </li>

                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick("Blog")}>
                            <span className="menu-icon">
                                <i className="mdi mdi-contacts"></i>
                            </span>
                            <span className="menu-title">Blogs</span>
                        </span>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                            <span className="menu-icon">
                                <i className="mdi mdi-security"></i>
                            </span>
                            <span className="menu-title">User Pages</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link"
                            href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
                            <span className="menu-icon">
                                <i className="mdi mdi-file-document-box"></i>
                            </span>
                            <span className="menu-title">Documentation</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid page-body-wrapper">
                <nav className="navbar p-0 fixed-top d-flex flex-row">

                    <div className="navbar-menu-wrapper d-flex justify-content-between align-items-center">
                        <div >
                            <h1 className='text-light'>Admin dashboard</h1>
                        </div>
                        <div>
                            <button onClick={handleLogOutUser} className='btn btn-danger' style={{ padding: "6px" }}>Logout</button>
                        </div>
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu"></span>
                        </button>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                            data-toggle="offcanvas">
                            <span className="mdi mdi-format-line-spacing"></span>
                        </button>
                    </div>
                </nav>
                <div className="main-panel">
                    <div className="content-wrapper">

                        {/* <h1>hello world</h1> */}
                        {activeComponent === 'TotalUser' && <TotalUser />}
                        {activeComponent === 'AllCourses' && <AllCourses handleMenuClick={()=>handleMenuClick} />}
                        {activeComponent === 'AllCategorySubcategory' && <AllCategorySubcategory />}
                        {activeComponent === 'Blog' && <Blog />}
                        {activeComponent === 'CourseUpdate' && <CourseUpdate />}



                    </div>

                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © topseedtech.com
                                2024</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Topseed Technology Pvt Ltd</span>
                        </div>
                    </footer>

                </div>

            </div>
        </div>
    )
}
