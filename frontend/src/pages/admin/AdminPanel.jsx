import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCalendarDays, faClipboard, faList, faMoneyBill, faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import TotalUser from './TotalUser';
import AllCourses from './AllCourses';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserStart } from '../../redux/actions/logoutUser.action';
import ROLE from '../../common/role';
import AllCategorySubcategory from './AllCategory-Subcategory';
// import Blog from './Blog';
import CourseUpdate from './updates/CourseUpdate';
import TransactionOrder from './TransactionOrder';
import { Link, useNavigate } from 'react-router-dom';
import Review from './Review';
// import CourseCurriculum from './CourseCurriculum';

export default function AdminPanel() {
    const [activeComponent, setActiveComponent] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleMenuClick = (TotalUser, AllCourses) => {
        setActiveComponent(TotalUser, AllCourses, AllCategorySubcategory, CourseUpdate, TransactionOrder, Review);
    }
    // const message = useSelector((state) => state.message?.message)
    const user = useSelector((state) => state.user.user);

    // console.log(message);

    const handleLogOutUser = () => {
        dispatch(logoutUserStart())
        setTimeout(() => {
            navigate('/sign-in')
        }, 1000)
    }

    useEffect(() => {
        if (!user) {
            navigate("*");
        } else if (user.role !== ROLE.ADMIN) {
            navigate('/');
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
                            <Link to="" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></Link>
                            <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                                aria-labelledby="profile-dropdown">
                                <Link to="" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-onepassword  text-info"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar-today text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link" to="">
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faCalendarDays} className="text-primary" />
                            </span>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('TotalUser')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>User</span>
                        </span>

                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('AllCategorySubcategory')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faList} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Category-subcategory</span>
                        </span>
                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('AllCourses')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Courses</span>
                        </span>
                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick('CourseCurriculum')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faClipboard} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Course curriculum</span>
                        </span>
                    </li>

                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick("TransactionOrder")}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faMoneyBill} />
                            </span>
                            <span className="menu-title">Order-transactions</span>
                        </span>
                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link" onClick={() => handleMenuClick("Review")}>
                            <span className="menu-icon">
                            <FontAwesomeIcon icon= {faPenToSquare} />
                            </span>
                            <span className="menu-title">Inquires & review's</span>
                        </span>
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
                        {activeComponent === 'AllCourses' && <AllCourses handleMenuClick={() => handleMenuClick} />}
                        {activeComponent === 'AllCategorySubcategory' && <AllCategorySubcategory />}
                        {activeComponent === 'TransactionOrder' && <TransactionOrder />}
                        {activeComponent === 'CourseUpdate' && <CourseUpdate />}
                        {activeComponent === 'Review' && <Review />}
                        {/* {activeComponent === 'CourseCurriculum' && <CourseCurriculum />} */}


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
