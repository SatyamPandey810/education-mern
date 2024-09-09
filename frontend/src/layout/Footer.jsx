import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllCourseStart } from '../redux/actions/getCourses.action';

export default function Footer() {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);

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
    }, [dispatch])

    return (
        <footer className="footer">
            <div className="footer-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-wedget-one">
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer hendrerit, enim
                                    varius proi Lorem ipsum dolor sit amet</p>
                                <div className="mt-4">
                                    <Link to=""><img src="assets/img/ECOclassNameICS EDUCATION SERVICES LTD.png" width="150"
                                        alt="img" /></Link>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget-menu">
                                <h2>our Course</h2>
                                <ul>
                                    {
                                         (categorizedCourses["Another Course"] || []).map((course, index) => (
                                             <li key={index}><Link to={`/category/${course._id}`}>{course.name}</Link></li>
                                         ))
                                    }
                                    {/* <li><Link to="">Web Development</Link></li>
                                    <li><Link to="">Article Wiriting</Link></li>
                                    <li><Link to="">Vitual Assitance</Link></li>
                                    <li><Link to="">Support Center</Link></li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget-menu">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><Link to="">Support Center</Link></li>
                                    <li><Link to="">Create Account</Link></li>
                                    <li><Link to="">business Policy</Link></li>
                                    <li><Link to="">Terms and condition</Link></li>
                                    <li><Link to="">Analysis Course</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-wedget-four">
                                <h2>contact us</h2>
                                <div className="inner-box">
                                    <div className="media">
                                        <div className="inner-item">
                                            <div className="media-left">
                                                <span className="icon"><i className="fa fa-map-marker"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <span className="inner-text">SUITE 304 AND 305 LOZUMBA COMPLEX NO. 6 AWKA
                                                    STREET AREA 10 GARKI ABUJA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="inner-item">
                                            <div className="media-left">
                                                <span className="icon"><i className="fa fa-envelope-o"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <span className="inner-text">
                                                    <Link to="mailto:ecoclassNameicseducation@gmail.com"
                                                        className="__cf_email__">ecoclassNameicseducation@gmail.com</Link>

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="inner-item">
                                            <div className="media-left">
                                                <span className="icon"><i className="fa fa-phone"></i></span>
                                            </div>
                                            <div className="media-body">
                                                <span className="inner-text">+2348035996723, +2348125446682, +2348035210068,
                                                    +2348035996723</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="copy-right">
                                <p>
                                    Copyright 2022 &copy; <span><Link to="">EcoclassNameics Educational Services,</Link></span>
                                    Designed by:<span> Topseed Technology Pvt Ltd.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
