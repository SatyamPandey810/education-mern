import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import TotalUser from './TotalUser';
import AllCourses from './AllCourses';

export default function AdminPanel() {
    // const [openUser, setOpenUser] = useState(false)
    // const [openCurse, setOpenCurse] = useState(false)
    const [activeComponent, setActiveComponent] = useState('');

    const handleMenuClick = (TotalUser,AllCourses) => {
        setActiveComponent(TotalUser,AllCourses);
    }



    return (
        <div className="container-scroller">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle " src="assets/img/face15.jpg" alt="" />
                                    <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h5 className="text-light">Henry Klein</h5>
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
                    {/* <li className="nav-item menu-items">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span className="menu-icon">
                                <i className="mdi mdi-laptop"></i>
                            </span>
                            <span className="menu-title">Users</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                            </ul>
                        </div>
                    </li> */}
                    <li className="nav-item menu-items">
                        <span className="nav-link"  onClick={() => handleMenuClick('TotalUser')}>
                            <span className="menu-icon">
                                <i className="mdi mdi-playlist-play"></i>
                            </span>
                            <span  className="menu-title">User</span>
                        </span>

                    </li>
                    <li className="nav-item menu-items">
                        <span className="nav-link"  onClick={() => handleMenuClick('AllCourses')}>
                            <span className="menu-icon">
                                <i className="mdi mdi-table-large"></i>
                            </span>
                            <span  className="menu-title">Courses</span>
                        </span>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="pages/charts/chartjs.html">
                            <span className="menu-icon">
                                <i className="mdi mdi-chart-bar"></i>
                            </span>
                            <span className="menu-title">Charts</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="pages/icons/mdi.html">
                            <span className="menu-icon">
                                <i className="mdi mdi-contacts"></i>
                            </span>
                            <span className="menu-title">Icons</span>
                        </a>
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

                    <div className="navbar-menu-wrapper">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu"></span>
                        </button>
                        {/* <ul className="navbar-nav navbar-nav-right mt-3">
                            <li className="nav-item dropdown  d-flex justify-content-between">
                                <a className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown"
                                    aria-expanded="false" href="#">+ Create New Project</a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="createbuttonDropdown">
                                    <h6 className="p-3 mb-0">Projects</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                               <Icon path={mdiFileOutline} size={1} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">Software Development</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-web text-info"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">UI Development</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-layers text-danger"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">Software Testing</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">See all projects</p>
                                </div>
                            </li>
                            <li className="nav-item nav-settings d-none d-lg-block">
                                <a className="nav-link" href="#">
                                    <i className="mdi mdi-view-grid"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown border-left">
                                <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="mdi mdi-email"></i>
                                    <span className="count bg-success"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="messageDropdown">
                                    <h6 className="p-3 mb-0">Messages</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="assets/images/faces/face4.jpg" alt="image" className="rounded-circle profile-pic" />
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                                            <p className="text-muted mb-0"> 1 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="assets/images/faces/face2.jpg" alt="image" className="rounded-circle profile-pic" />
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                                            <p className="text-muted mb-0"> 15 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="assets/images/faces/face3.jpg" alt="image" className="rounded-circle profile-pic" />
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                                            <p className="text-muted mb-0"> 18 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">4 new messages</p>
                                </div>
                            </li>
                            <li className="nav-item dropdown border-left">
                                <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                                    data-toggle="dropdown">
                                    <i className="mdi mdi-bell"></i>
                                    <span className="count bg-danger"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="notificationDropdown">
                                    <h6 className="p-3 mb-0">Notifications</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-calendar text-success"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Event today</p>
                                            <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-danger"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Settings</p>
                                            <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-link-variant text-warning"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Launch Admin</p>
                                            <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">See all notifications</p>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                                    <div className="navbar-profile">
                                        <img className="img-xs rounded-circle" src="assets/images/faces/face15.jpg" alt="" />
                                        <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                                        <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="profileDropdown">
                                    <h6 className="p-3 mb-0">Profile</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-success"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Settings</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-logout text-danger"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Log out</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">Advanced settings</p>
                                </div>
                            </li>
                        </ul> */}
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                            data-toggle="offcanvas">
                            <span className="mdi mdi-format-line-spacing"></span>
                        </button>
                    </div>
                </nav>
                <div className="main-panel">
                    <div className="content-wrapper">
                    {activeComponent === 'TotalUser' && <TotalUser />}
                    {activeComponent === 'AllCourses' && <AllCourses />}

                    </div>

                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com
                                2020</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a
                                href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin
                                templates</a> from Bootstrapdash.com</span>
                        </div>
                    </footer>

                </div>

            </div>
        </div>
    )
}
