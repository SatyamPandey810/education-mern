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
            <div class="pagehding-sec">
                <div class="images-overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-heading">
                                <h1>Course Details</h1>
                            </div>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="">Course Details</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="course-details-page pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="course-tab">
                                <ul class="service-tab">
                                    <li class="active"><Link data-toggle="tab" to="#overview" aria-expanded="true">Course Overview</Link></li>
                                    <li class=""><Link data-toggle="tab" to="#curriculum" aria-expanded="false">Course Curriculum</Link></li>
                                    <li class=""><Link data-toggle="tab" to="#instructor" aria-expanded="false">Course Instructor</Link></li>
                                    <li class=""><Link data-toggle="tab" to="#coruse_review" aria-expanded="false">Course Review</Link></li>
                                    <li class=""><Link data-toggle="tab" to="#write_review" aria-expanded="false">Write Review</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="tab-content">

                                <div id="overview" class="tab-pane active">
                                    <div class="row">
                                        {
                                            (categorizedCourses["Our learapress"] || []).map((course, index) => (
                                                <div class="col-md-12" key={index}>
                                                    <div class="course-details">
                                                        <img src={course.image} alt="" />
                                                        <h2><Link to={`/category/${course._id}`}>{course.name}</Link></h2>
                                                       <p>{course.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>


                                <div id="curriculum" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="faq-sec">
                                                <div class="panel-group" id="accordion" role="tablist">
                                                    <div class="panel">
                                                        <div class="panel-heading" role="tab" id="titleOne">
                                                            <h4 class="panel-title">
                                                                <Link data-toggle="collapse" data-parent="#accordion" to="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Learn Start Basic</Link>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="titleOne">
                                                            <div class="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 1.1
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 1.2
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 1.3
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="panel">
                                                        <div class="panel-heading" role="tab" id="titleTwo">
                                                            <h4 class="panel-title">
                                                                <Link class="collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Learn Advance Level</Link>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="titleTwo">
                                                            <div class="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 2.1
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 2.2
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 2.3
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="panel">
                                                        <div class="panel-heading" role="tab" id="titleThree">
                                                            <h4 class="panel-title">
                                                                <Link class="collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    More Advance Level</Link>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="titleThree">
                                                            <div class="panel-content">
                                                                <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no</p>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-file-pdf-o"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 3.1
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With PDF File
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            35 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-file-text"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 3.2
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With File text
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
                                                                            45 Minite
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="coruse-lesson">
                                                                    <div class="coruse-left-text">
                                                                        <span class="coruse-left-icon">
                                                                            <i class="fa fa-play-circle"></i>
                                                                        </span>
                                                                        <span class="coruse-left-title">
                                                                            Lecture 3.3
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-center-text">
                                                                        <span>
                                                                            Lesson With Vedio File
                                                                        </span>
                                                                    </div>
                                                                    <div class="coruse-right-text">
                                                                        <span class="coruse-right-icon">
                                                                            <i class="fa fa-clock-o"></i>
                                                                        </span>
                                                                        <span class="coruse-right-time">
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


                                <div id="instructor" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="course-insturctor">
                                                <div class="insturctor-img">
                                                    <img src="assets/img/client1.png" alt="" />
                                                </div>
                                                <div class="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div class="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="coruse_review" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="course-review course-insturctor">
                                                <div class="insturctor-img">
                                                    <img src="assets/img/client2.png" alt="" />
                                                </div>
                                                <div class="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div class="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="course-review course-insturctor">
                                                <div class="insturctor-img">
                                                    <img src="assets/img/client1.png" alt="" />
                                                </div>
                                                <div class="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div class="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="course-review course-insturctor">
                                                <div class="insturctor-img">
                                                    <img src="assets/img/client3.png" alt="" />
                                                </div>
                                                <div class="details">
                                                    <h2><Link to="">David Max</Link></h2>
                                                    <span>Math Analysis</span>
                                                </div>
                                                <div class="rating">
                                                    <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="write_review" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="review-form">
                                                <div class="contact-page-form">
                                                    <h2>Write Your Review</h2>
                                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                                        <div class="single-input-field">
                                                            <input type="text" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                                        <div class="single-input-field">
                                                            <input type="text" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                                        <div class="single-input-field">
                                                            <input type="text" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                                        <div class="single-input-field">
                                                            <input type="email" placeholder="E-mail" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 message-input">
                                                        <div class="single-input-field">
                                                            <textarea placeholder="Write Your Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="single-input-fieldsbtn">
                                                        <input type="submit" value="Send Now" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="event-details-info">
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
                                <div class="get-coruse-btn">
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
