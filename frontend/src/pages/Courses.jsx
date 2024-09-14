import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourseStart } from '../redux/actions/getCourses.action';
import { Link } from 'react-router-dom';

export default function Courses() {
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
        <>
            <div className="pagehding-sec">
                <div className="images-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1>Course Details</h1>
                            </div>
                            <div className="breadcrumb-list">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="">Course Details</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-details-page pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="course-tab">
                                <ul className="service-tab">
                                    <li className="active"><Link data-toggle="tab" to="#overview" aria-expanded="true">Course Overview</Link></li>
                                    <li className=""><Link data-toggle="tab" to="#curriculum" aria-expanded="false">Course Curriculum</Link></li>
                                    <li className=""><Link data-toggle="tab" to="#instructor" aria-expanded="false">Course Instructor</Link></li>
                                    <li className=""><Link data-toggle="tab" to="#coruse_review" aria-expanded="false">Course Review</Link></li>
                                    <li className=""><Link data-toggle="tab" to="#write_review" aria-expanded="false">Write Review</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tab-content">

                                <div id="overview" className="tab-pane active">
                                    <div className="row">
                                        {
                                            (categorizedCourses["Our learapress"] || []).map((course, index) => (
                                                <div className="col-md-12" key={index}>
                                                    <div className="course-details">
                                                        <img src={course.image} alt="" />
                                                        <h2><Link to={`/category/${course._id}`}>{course.name}</Link></h2>
                                                       <p>{course.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>


                                <div id="curriculum" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="faq-sec">
                                                <div className="panel-group" id="accordion" role="tablist">
                                                    <div className="panel">
                                                        <div className="panel-heading" role="tab" id="titleOne">
                                                            <h4 className="panel-title">
                                                                <Link data-toggle="collapse" data-parent="#accordion" to="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Learn Start Basic</Link>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="titleOne">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 1.1
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 1.2
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 1.3
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel">
                                                        <div className="panel-heading" role="tab" id="titleTwo">
                                                            <h4 className="panel-title">
                                                                <Link className="collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Learn Advance Level</Link>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="titleTwo">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 2.1
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 2.2
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 2.3
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel">
                                                        <div className="panel-heading" role="tab" id="titleThree">
                                                            <h4 className="panel-title">
                                                                <Link className="collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    More Advance Level</Link>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="titleThree">
                                                            <div className="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 3.1
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 3.2
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="coruse-lesson">
                                                                    <div className="coruse-left-text">
                                                                        <span className="coruse-left-icon">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span className="coruse-left-title">
                                                                            Lecture 3.3
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div className="coruse-right-text">
                                                                        <span className="coruse-right-icon">
                                                                            <i className="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span className="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
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


                                <div id="instructor" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="assets/img/client1.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="coruse_review" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="assets/img/client2.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="assets/img/client1.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="course-review course-insturctor">
                                                <div className="insturctor-img">
                                                    <img src="assets/img/client3.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div className="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="write_review" className="tab-pane">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="review-form">
                                                <div className="contact-page-form">
                                                    <h2>Write Your Review</h2>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="single-input-field">
                                                            <input type="text" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="single-input-field">
                                                            <input type="text" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="single-input-field">
                                                            <input type="text" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="single-input-field">
                                                            <input type="email" placeholder="E-mail" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 message-input">
                                                        <div className="single-input-field">
                                                            <textarea placeholder="Write Your Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="single-input-fieldsbtn">
                                                        <input type="submit" value="Send Now" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="event-details-info">
                                <h2>Course Info</h2>
                                <ul>
                                    <li>Instructor:<span>Alex</span></li>
                                    <li>Lectures:<span>15</span></li>
                                    <li>Quizzes:<span>50</span></li>
                                    <li>Seat Availble:<span>45</span></li>
                                    <li>Duration:<span>4 Week</span></li>
                                    <li>Course Price:<span>$45</span></li>
                                    <li>Rating:<span><img src="assets/img/rating.png" alt="" /></span></li>
                                </ul>
                                <div className="get-coruse-btn">
                                    <Link to="">Get Course</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
