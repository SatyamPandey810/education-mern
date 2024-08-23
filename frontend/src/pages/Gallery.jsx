import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findCourseCategoryAndSubcategoryStart } from '../redux/actions/findCourseByCategoryAndSubcategory.action';

export default function Gallery() {
    const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);
    const dispatch = useDispatch()
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
        dispatch(findCourseCategoryAndSubcategoryStart());
    }, [dispatch])
    return (
        <>
            <div className="pagehding-sec">
                <div className="images-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1>gallery Page</h1>
                            </div>
                            <div className="breadcrumb-list">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">gallery Page</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="gallery-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="gallery-area">

                            <div className="navbarsort">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarfiltr" aria-expanded="false">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="shorttitle">
                                    <h2>Sort Gallery</h2>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse latest--project" id="navbarfiltr">
                                <ul className="simplefilter">
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".institute">institute</li>
                                    <li data-filter=".library">library</li>
                                    <li data-filter=".etertainment">etertainment</li>
                                    <li data-filter=".classNameroom">classNameroom</li>
                                </ul>
                            </div>


                            <div className="gallery-container">
                                {
                                    (categorizedCourses["Our Student Gallery"] || []).map((course, index) => (
                                        <div className="col-xs-6 col-sm-4 col-md-3" key={index}>
                                            <div className="gallery-item">
                                                <img src={course?.image} alt="image" />
                                                <div className="gallery-overlay">
                                                    <div className="gallery-overlay-text">
                                                        <span className="gallery-button">
                                                            <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                                {/* <div className="col-xs-6 col-sm-4 col-md-3 filtr-item institute">
                                    <div className="gallery-item">
                                        <img src="assets/img/5.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item library">
                                    <div className="gallery-item">
                                        <img src="assets/img/2.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
                                    <div className="gallery-item">
                                        <img src="assets/img/3.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
                                    <div className="gallery-item">
                                        <img src="assets/img/8.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
                                    <div className="gallery-item">
                                        <img src="assets/img/7.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
                                    <div className="gallery-item">
                                        <img src="assets/img/6.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
                                    <div className="gallery-item">
                                        <img src="assets/img/9.jpg" alt="" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-overlay-text">
                                                <span className="gallery-button">
                                                    <a href="admin/uploads/gellary/image" className="gallery-photo"><i className="fa fa-file-image-o"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>


                            <div className="col-md-12">
                                <div className="gallery-load-more-btn">
                                    <a href="#">Load More Gallery</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
