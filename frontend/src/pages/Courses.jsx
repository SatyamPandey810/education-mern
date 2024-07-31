import React from 'react'

export default function Courses() {
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
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Course Details</a></li>
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
                                    <li class="active"><a data-toggle="tab" href="#overview" aria-expanded="true">Course Overview</a></li>
                                    <li class=""><a data-toggle="tab" href="#curriculum" aria-expanded="false">Course Curriculum</a></li>
                                    <li class=""><a data-toggle="tab" href="#instructor" aria-expanded="false">Course Instructor</a></li>
                                    <li class=""><a data-toggle="tab" href="#coruse_review" aria-expanded="false">Course Review</a></li>
                                    <li class=""><a data-toggle="tab" href="#write_review" aria-expanded="false">Write Review</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="tab-content">

                                <div id="overview" class="tab-pane active">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="course-details">
                                                <img src="assets/img/slide1.jpg" alt="" />
                                                <h2><a href="#">Duo nibh malis dolorem cu. Te qui tantas quidam philosophia, ut erroribus definitionem mea. Sed an nominati consequuntu</a></h2>
                                                <p>Lorem ipsum dolor sit amet, ut vel quodsi feugait praesent, ex qui lucilius voluptatum referrentur. Velit harum te ius, atomorum sapientem ea sit, id saepe utinam pri. Et sit singulis intellegam. His quas tibique an, at nihil doming nec, partem tibique adipisci sit an. Putent nostrud accumsan vim at. No eos mollis ornatus vocibus, id eos persius liberavisse, ne cum ferri posse fuisset.</p>
                                                <p>Dicam antiopam reformidans id has. Cum ei elit nostrud, at per erant conceptam. Nam te impedit meliore mnesarchum
                                                    . Eu posse quodsi oportere vis. Eam recusabo constituto ex, et sea discere qualisque scribentur, libris feugiat vis at.
                                                </p>
                                            </div>
                                        </div>
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
                                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Learn Start Basic</a>
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
                                                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Learn Advance Level</a>
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
                                                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    More Advance Level</a>
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
                                                    <h2><a href="#">David Max</a></h2>
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
                                                    <h2><a href="#">David Max</a></h2>
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
                                                    <h2><a href="#">David Max</a></h2>
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
                                                    <h2><a href="#">David Max</a></h2>
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
                                    <a href="#">Get Course</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
