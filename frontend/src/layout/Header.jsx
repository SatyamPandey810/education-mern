import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import ROLE from '../common/role';

export default function Header() {

    const user = useSelector((state) => state.user.user);
    const isAdmin = user?.role === ROLE.ADMIN;

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
                                <Link to="/"><img src="/assets/img/ECOclassNameICS EDUCATION SERVICES LTD.png" width="100"
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
                                                <li><a href="#">Educational Services & Consulation</a></li>
                                                <li><a href="#">Online Tranings</a></li>
                                                <li><a href="#">Admission Processing to Study Abroad</a></li>
                                                <li><a href="#"> Publishing of Education Materials</a></li>
                                                <li><a href="#"> Private Schools- Primary to Tertiary Institutions</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/gallery">gallery</Link></li>
                                        <li><Link to="/contact-us">Contact</Link></li>

                                        <li><Link to="/sign-in">Login</Link></li>
                                        {isAdmin && (
                                            <li><Link to="/admin-dashboard">Admin panel</Link></li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-3 applay-button-area">
                            <div className="applay-button">
                                <a href="#">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
