import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookOpen, faCalendarDays, faClipboard, faFolder, faList, faMoneyBill, faPenToSquare, faPowerOff, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import TotalUser from './TotalUser';
import AllCourses from './AllCourses';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserStart } from '../../redux/actions/logoutUser.action';
import ROLE from '../../common/role';
import AllCategorySubcategory from './AllCategory-Subcategory';
import CourseUpdate from './updates/CourseUpdate';
import TransactionOrder from './TransactionOrder';
import { Link, useNavigate } from 'react-router-dom';
import Review from './Review';
import HomeDashboard from './HomeDashboard';

export default function AdminPanel() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('HomeDashboard');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleMenuClick = (TotalUser, AllCourses) => {
        setActiveComponent(TotalUser, AllCourses, AllCategorySubcategory, CourseUpdate, TransactionOrder, Review);
    }
    const user = useSelector((state) => state.user.user);

    // console.log(message);

    const handleLogOutUser = () => {
        dispatch(logoutUserStart())
        setTimeout(() => {
            navigate('/sign-in')
        }, 1000)
    }

    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate('/')
        }
    }, [user])


    const toggleMobileMenu = () => setMenuOpen(!menuOpen);
    return (
        <div className="container-scroller">
            <nav id="sidebar" className={`menus ${menuOpen ? 'sidebar-offcanvas' : ''}`}>
                <ul className="nav">
                    <li className="nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic d-flex align-items-center mb-4">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle " src="assets/img/panel.png" alt="" />
                                    <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h4 className="text-light text-capitalize">{user?.name}</h4>
                                    <span>{user?.role}</span>
                                </div>
                            </div>
                            <Link to="" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></Link>
                           
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <Link className="nav-link active" to=""  onClick={() => handleMenuClick('HomeDashboard')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faCalendarDays} className="text-primary" />
                            </span>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick('TotalUser')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>User</span>
                        </Link>

                    </li>
                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick('AllCategorySubcategory')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faList} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Category-subcategory</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick('AllCourses')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Courses</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick('CourseCurriculum')}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faClipboard} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Course curriculum</span>
                        </Link>
                    </li>

                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick("TransactionOrder")}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faMoneyBill} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Order-transactions</span>
                        </Link>
                    </li>
                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick("Review")}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                            <span className="menu-title" style={{ cursor: "pointer" }}>Inquires & review's</span>
                        </Link>
                    </li>

                    <li className="nav-item menu-items">
                        <Link to='' className="nav-link" onClick={() => handleMenuClick("Review")}>
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={faFolder} />
                            </span>
                            <span className="menu-title">Documentation</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid page-body-wrapper">
                <nav className="navbar p-0 fixed-top d-flex flex-row">

                    <div className="navbar-menu-wrapper d-flex justify-content-between align-items-center">
                        <div>
                            <div className="mobile-nav-menu" onClick={toggleMobileMenu}>
                                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                            </div>
                        </div>
                        <div >
                            <h1 className='text-light'>Admin dashboard</h1>
                        </div>
                        <div>
                            <button onClick={handleLogOutUser} className='btn btn-success text-capitalize' style={{ padding: "6px" }}>logout <FontAwesomeIcon icon={faPowerOff} /></button>

                        </div>

                    </div>
                </nav>
                <div className="main-panel">
                    <div className="content-wrapper">
                        {/* <ThankuPage /> */}
                        {activeComponent === 'HomeDashboard' && <HomeDashboard />}
                        {activeComponent === 'TotalUser' && <TotalUser />}
                        {activeComponent === 'AllCourses' && <AllCourses handleMenuClick={() => handleMenuClick} />}
                        {activeComponent === 'AllCategorySubcategory' && <AllCategorySubcategory />}
                        {activeComponent === 'TransactionOrder' && <TransactionOrder />}
                        {activeComponent === 'CourseUpdate' && <CourseUpdate />}
                        {activeComponent === 'Review' && <Review />}
                        {/* {activeComponent === 'CourseCurriculum' && <CourseCurriculum />} */}
                    </div>

                    <footer className="footer text-light">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="d-block text-center text-sm-left d-sm-inline-block">Copyright © topseedtech.com
                                2024</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Topseed Technology Pvt Ltd</span>
                        </div>
                    </footer>

                </div>

            </div>
        </div>
    )
}
