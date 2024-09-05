import React, { useEffect, useMemo, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import moment from "moment"
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourseStart } from '../redux/actions/getCourses.action';
import { findCourseCategoryAndSubcategoryStart } from '../redux/actions/findCourseByCategoryAndSubcategory.action';
import summaryApi from '../common';
import { Link, useParams } from 'react-router-dom';
import { getAllCategoryStart } from '../redux/actions/getCategory.action';
// import { findBlogCategoryAndSubcategoryStart } from '../redux/actions/blogs/blogGetCategoryAndSubcategory.action';

export default function Home() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);
  
  // const blogs = useSelector((state) => state.findBlog.blogs)
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  // find course category and subcategory wise
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


  // find blogs category and subcategory wise
  // const separateBlogsByCategory = () => {
  //   const categorizedBlogs = {};

  //   blogs?.data?.forEach((category) => {
  //     const categoryName = category._id;

  //     if (!categorizedBlogs[categoryName]) {
  //       categorizedBlogs[categoryName] = [];
  //     }

  //     category.subcategories.forEach((subcategory) => {
  //       subcategory.blogs.forEach((blog) => {
  //         categorizedBlogs[categoryName].push(blog);
  //       });
  //     });
  //   });

  //   return categorizedBlogs;
  // };

  // const categorizedBlogs = separateBlogsByCategory();
  // console.log(categorizedBlogs);



  useEffect(() => {
    dispatch(findCourseCategoryAndSubcategoryStart());
    dispatch(getAllCourseStart())
    dispatch(getAllCategoryStart())
    // dispatch(findBlogCategoryAndSubcategoryStart())
  }, [dispatch])

  return (
    <>

      <div>
        <div className="slider">
          <div className="">
            <OwlCarousel className='owl-theme all-slide owl-item' autoplay={true} autoplayHoverPause={true} items={1} loop margin={10} nav>
              <div className="single-slide" style={{ backgroundImage: "url('assets/img/slide1.jpg')" }}>
                <div className="slider-overlay"></div>
                <div className="slider-wrapper">
                  <div className="slider-text">
                    <div className="slider-caption">
                      <h1>We are right person for your Educations teaching</h1>
                      <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                        donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet</p>
                      <ul>
                        <li><a href="about.html">learn more</a></li>
                        <li><a href="contact.html">contact us </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-slide" style={{ backgroundImage: "url('assets/img/slide2.jpg')" }}>

                <div className="slider-overlay"></div>
                <div className="slider-wrapper">
                  <div className="slider-text">
                    <div className="slider-caption">
                      <h1>We are right person for your Educations teaching</h1>
                      <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                        donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet</p>
                      <ul>
                        <li><a href="about.html">learn more</a></li>
                        <li><a href="contact.html">contact us </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>

        <div className="about-us-sec pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-desc">
                  <h1>Welcome To Our learapress</h1>
                  {
                    (categorizedCourses["Our learapress"] || []).map((course, index) => (
                      <p key={index}>
                        {course.description}                       
                      </p>
                    ))
                  }
                  <Link to="/course" className="about-btn">Read More</Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="vedio-inner">
                  <img src="assets/img/vedio.jpg" alt="" />
                  <div className="vedio-overly">
                    <button onClick={openModal} className="btn btn-warning video-play">
                      <span className="video-icon">&#9658;</span> {/* Play button icon */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-header-sec">
          <div className="course-sec-image"></div>
        </div>

        <div className="course-sec pb-70">
          <div className="container">
            <div className="row">

              <div className="col-md-12">
                <div className="sec-title">
                  <h1>Our Feature Course</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="course-list-sec">
                <div className="all-course">
                  <OwlCarousel className='owl-theme' loop margin={10} nav>
                    {
                      (categorizedCourses["Our Feature Course"] || []).map((course, index) => (
                        <div className="course-inner" key={index}>
                          <div className="course-thumb">
                            <img src={course.image} alt={course.name} />
                            <div className="readmore-button">
                              <Link to={`/category/${course._id}`}>Learn More</Link>
                            </div>
                          </div>
                          <div className="course-meta">
                            <span className="course-price">${course.price}</span>
                            <span className="course-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <div className="course-desc">
                            <h2 className='text-lowercase'>{course.name}</h2>
                            {/* <p>{course.description}</p> */}
                          </div>
                          <div className="course-info">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>{course.sheet} Seats</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-clock-o"></i>{moment(course.createdAt).format('HH')} hour</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-heart"></i>Save</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    }
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="another-course-sec pb-70">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title">
                  <h1>Another Course</h1>
                  <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor
                    suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac
                    nonummy, egestas mauris .</p>
                </div>
              </div>
            </div>

            <div className="row">
              {
                (categorizedCourses["Another Course"] || []).map((course, index) => (

                  < div className="col-md-4" key={index} >
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={course.image} alt="img" />

                        <div className="readmore-button">
                          <Link to={`/category/${course._id}`}>Learn More</Link>
                        </div>
                      </div>
                      <div className="course-meta">
                        <span className="course-price">${course.price}</span>
                        <span className="course-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </span>
                      </div>
                      <div className="course-desc">
                        <h2 className='text-lowercase'>{course.name}</h2>
                        <p className='text-lowercase'>{course.description}</p>
                      </div>
                      <div className="course-info">
                        <ul>
                          <li>
                            <i className="fa fa-user"></i>{course.sheet} Seats
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-clock-o"></i>{moment(course.createdAt).format('HH')}  hour</a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-heart"></i>Save</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


                ))
              }
            </div>
          </div>
        </div >

        <div className="count-up-sec">
          <div className="count-up-sec-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 inner">
                <div className="count-up-inner">
                  <div className="count-up-icon">
                    <img src="assets/img/icon/employee.png" alt="" />
                  </div>
                  <div className="countup-text">
                    <h2 className="counter">246</h2>
                    <h4>Expert Instructor</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-6 inner">
                <div className="count-up-inner">
                  <div className="count-up-icon">
                    <img src="assets/img/icon/customer.png" alt="" />
                  </div>
                  <div className="countup-text">
                    <h2 className="counter">416</h2>
                    <h4>happy student</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-6 inner">
                <div className="count-up-inner">
                  <div className="count-up-icon">
                    <img src="assets/img/icon/project.png" alt="" />
                  </div>
                  <div className="countup-text">
                    <h2 className="counter">648</h2>
                    <h4>course Done</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-6 inner">
                <div className="count-up-inner">
                  <div className="count-up-icon">
                    <img src="assets/img/icon/medal.png" alt="" />
                  </div>
                  <div className="countup-text">
                    <h2 className="counter">824</h2>
                    <h4>award winner</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-sec pt-100 pb-100">
          {/* <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="sec-title">
                  <h1>Our Student Gallery</h1>
                  <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor
                    suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac
                    nonummy, egestas mauris .</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="gallery-area">
                <div class="navbarsort">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbarfiltr" aria-expanded="false">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <div class="shorttitle">
                    <h2>Sort Gallery</h2>
                  </div>
                </div>
                <div class="collapse navbar-collapse latest--project" id="navbarfiltr">
                  <ul class="simplefilter">
                    <li class="active" data-filter="*">All</li>
                    <li data-filter=".institute">institute</li>
                    <li data-filter=".library">library</li>
                    <li data-filter=".etertainment">entertainment</li>
                    <li data-filter=".classroom">classroom</li>
                  </ul>
                </div>

                <div class="gallery-container">
                  {
                    (categorizedCourses["Our Student Gallery"] || []).map((course, index) => (
                      <div class="col-xs-6 col-sm-4 col-md-3 filtr-item institute" key={index}>
                        <div class="gallery-item">
                          <img src={course?.image} alt="image" />
                          <div class="gallery-overlay">
                            <div class="gallery-overlay-text">
                              <span class="gallery-button">
                              
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))
                  }


                </div>
                <div class="col-md-12 mb-2">
                  <div class="gallery-load-more-btn">
                    <a href="#">Load More Gallery</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="why-choose-us-sec pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec-title">
                    <h1>Why Choose Us Course</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <OwlCarousel className='owl-theme why-choose-all' items={3} loop margin={10} nav>
                      {
                        (categorizedCourses["Why Choose Us Course"] || []).map((course, index) => (
                          <div className="why-choose-inner" key={index}>
                            <div className="why-choose-thumb">
                              <img src={course.image} alt={course.name} />
                              <div className="why-choose-icon">
                                <img src="assets/img/image.png" alt="" />
                              </div>
                            </div>
                            <div className="why-choose-text">
                              <h2><Link to={`/category/${course._id}`}>{course.name}</Link></h2>
                              cource about
                            </div>
                          </div>
                        ))
                      }
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="instructor-sec pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec-title">
                    <h1>Our Expert Instructor</h1>
                    <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor
                      suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas
                      cubilia, ac nonummy, egestas mauris .</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <OwlCarousel className='owl-theme teams-all ' items={4} loop margin={10} nav>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="instructor-member">
                          <div className="instructor-member-thumb">
                            <img src="assets/img/img-8.jpg" alt="" />
                            <div className="instructor-overlay">
                              <ul>
                                <li>
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-google"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-skype"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h2>name</h2>
                          <h3>team profession</h3>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="instructor-member">
                          <div className="instructor-member-thumb">
                            <img src="assets/img/img-9.jpg" alt="" />
                            <div className="instructor-overlay">
                              <ul>
                                <li>
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-google"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-skype"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h2>name</h2>
                          <h3>team profession</h3>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="instructor-member">
                          <div className="instructor-member-thumb">
                            <img src="assets/img/img-10.jpg" alt="" />
                            <div className="instructor-overlay">
                              <ul>
                                <li>
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-google"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-skype"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h2>name</h2>
                          <h3>team profession</h3>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="instructor-member">
                          <div className="instructor-member-thumb">
                            <img src="assets/img/img-11.jpg" alt="" />
                            <div className="instructor-overlay">
                              <ul>
                                <li>
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-google"></i></a>
                                </li>
                                <li>
                                  <a href="#"><i className="fa fa-skype"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h2>name</h2>
                          <h3>team profession</h3>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-sec pt-100 pb-100">
            <div className="testimonial-sec-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="">
                    <OwlCarousel className='owl-theme all-testimonial' items={1} loop margin={10} nav>
                      <div className="single-testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                          donec, suscipit tortor et sapien donec ac nec.Lorem ipsum dolor sit amet, ligula
                          magna at etiam aliquip venenatis.
                          Vitae sit felis donec, suscipit tortor et sapien donec ac nec.
                        </p>
                        <div className="testimonial">
                          <div className="inner">
                            <div className="client-info">
                              <h2>Michael</h2>
                              <h3>Ceo & Founder</h3>
                            </div>
                          </div>
                          <div className="inner">
                            <div className="testimonial-client-img">
                              <img src="assets/img/testimonial_1.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="single-testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                          donec, suscipit tortor et sapien donec ac nec.Lorem ipsum dolor sit amet, ligula
                          magna at etiam aliquip venenatis.
                          Vitae sit felis donec, suscipit tortor et sapien donec ac nec.
                        </p>
                        <div className="testimonial">
                          <div className="inner">
                            <div className="client-info">
                              <h2>lucie</h2>
                              <h3>Ceo & Founder</h3>
                            </div>
                          </div>
                          <div className="inner">
                            <div className="testimonial-client-img">
                              <img src="assets/img/testimonial_2.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="single-testimonial">
                        <p>
                          Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                          donec, suscipit tortor et sapien donec ac nec.Lorem ipsum dolor sit amet, ligula
                          magna at etiam aliquip venenatis.
                          Vitae sit felis donec, suscipit tortor et sapien donec ac nec.
                        </p>
                        <div className="testimonial">
                          <div className="inner">
                            <div className="client-info">
                              <h2>Benjamin</h2>
                              <h3>Ceo & Founder</h3>
                            </div>
                          </div>
                          <div className="inner">
                            <div className="testimonial-client-img">
                              <img src="assets/img/testimonial_3.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>

          <div className="event-sec pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="faq-style1-sec">
                    <h1 className="faq-style1-title">Freequently Asked Question</h1>
                    <div className="panel-group" id="accordion" role="tablist">
                      <div className="panel">
                        <div className="panel-heading" role="tab" id="titleOne">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                              aria-expanded="true" aria-controls="collapseOne"> What`s the mission of
                              learapress ?</a>
                          </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                          aria-labelledby="titleOne">
                          <div className="panel-content">
                            Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit
                            dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim
                            platea, dolor lacinia arcu, vehicula nascetur
                            purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus
                            iaculis eu
                          </div>
                        </div>
                      </div>

                      <div className="panel">
                        <div className="panel-heading" role="tab" id="titleTwo">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                              href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              How can i get your service?</a>
                          </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                          aria-labelledby="titleTwo">
                          <div className="panel-content">
                            Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit
                            dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim
                            platea, dolor lacinia arcu, vehicula nascetur
                            purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus
                            iaculis eu
                          </div>
                        </div>
                      </div>

                      <div className="panel">
                        <div className="panel-heading" role="tab" id="titleThree">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                              href="#collapseThree" aria-expanded="false"
                              aria-controls="collapseThree"> How much exprience about learapress?</a>
                          </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
                          aria-labelledby="titleThree">
                          <div className="panel-content">
                            Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit
                            dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim
                            platea, dolor lacinia arcu, vehicula nascetur
                            purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus
                            iaculis eu
                          </div>
                        </div>
                      </div>

                      <div className="panel">
                        <div className="panel-heading" role="tab" id="titleFour">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                              href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Lorem ipsum dolor sit amet?</a>
                          </h4>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
                          aria-labelledby="titleFour">
                          <div className="panel-content">
                            Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit
                            dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim
                            platea, dolor lacinia arcu, vehicula nascetur
                            purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus
                            iaculis eu
                          </div>
                        </div>
                      </div>

                      <div className="panel">
                        <div className="panel-heading" role="tab" id="titleFive">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                              href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              how much offer for customer ?</a>
                          </h4>
                        </div>
                        <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
                          aria-labelledby="titleFive">
                          <div className="panel-content">
                            Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit
                            dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim
                            platea, dolor lacinia arcu, vehicula nascetur
                            purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus
                            iaculis eu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <h1 className="faq-style1-title">Join Us Our Event</h1>

                  {
                    (categorizedCourses["Join Us Our Event"] || []).map((course, index) => (
                      <div className="event-inner" key={index}>
                        <div className="event-thumb">
                          <img src={course.image} alt="" />
                          <div className="event-overlay">
                            <Link to={`/category/${course._id}`}><i className="fa fa-external-link"></i></Link>
                          </div>
                        </div>
                        <div className="event-desc">
                          <h2><Link to={`/category/${course._id}`}>{course.name}</Link></h2>
                          <div className="event-meta">
                            <ul>
                              <li><i className="fa fa-map-marker"></i>{course.loaction}</li>
                              {/* <li><i className="fa fa-clock-o"></i>08.00 - 11.30</li> */}
                            </ul>
                          </div>
                          <p>{course.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="call-to-action-sec">
            <div className="call-to-action-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-9">
                  <div className="call-to-action-text">
                    <h2>contact with us for customer support</h2>
                    <p>we are provide 24/7 hours to support.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-3">
                  <div className="call-to-action-text">
                    <a href="contact.html" className="btn">get support</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-sec pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec-title">
                    <h1>our latest post</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <OwlCarousel className='owl-theme all-latest-news' items={3} loop margin={10} nav>
                      {
                        (categorizedCourses["our latest post"] || []).map((course, index) => (
                          <div className="single-post" key={index}>

                            <div className="single-post-thumb">
                              <img src={course.image} alt="" />
                              <div className="single-post-thumb-overlay">
                                <div className="post-meta">
                                  <ul>
                                    <li>
                                      <Link to={`/category/${course._id}`}><i className="fa fa-user"></i>Admin</Link>
                                    </li>
                                    <li>
                                      <Link to={`/category/${course._id}`}><i className="fa fa-calendar"></i>{moment(course.createdAt).format('ll')}</Link>
                                    </li>
                                    <li>
                                      <Link to={`/category/${course._id}`}><i className="fa fa-comment-o"></i>{course.sheet}</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="single-post-text">
                              <h2><Link to={`/category/${course._id}`}>{course.name}</Link></h2>
                              <p>{course.description}</p>
                              <Link to={`/categories/${course._id}`} className="blog-readmore">Continue reading</Link>
                            </div>
                          </div>
                        ))
                      }
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId='YzDz8g1z83U'
        onClose={() => setIsOpen(false)}
      />

    </>
  )
}
