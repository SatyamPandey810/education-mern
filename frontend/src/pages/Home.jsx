import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import moment from "moment"
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourseStart } from '../redux/actions/getCourses.action';
import { findCourseCategoryAndSubcategoryStart } from '../redux/actions/findCourseByCategoryAndSubcategory.action';
import summaryApi from '../common';
import { useParams } from 'react-router-dom';
import { getAllCategoryStart } from '../redux/actions/getCategory.action';

export default function Home() {
  const dispatch = useDispatch()
  // const { categoryId, subcategoryId } = useParams();
  const allCategory = useSelector((state) => state.allCategory.allCategory)
  const allSubCategory = useSelector((state) => state.allSubCategory.allSubCategory)
  const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);
  console.log(allCategory);





  useEffect(() => {
    dispatch(findCourseCategoryAndSubcategoryStart({ categoryId: "66c075ae10a2ae04688fd77a", subcategoryId: "66c090c98b0ff855838148fe" }));

    dispatch(getAllCategoryStart())
  }, [dispatch])


  console.log(courses);
 


  return (
    <>


      <div className="course-header-sec">
        <div className="course-sec-image"></div>
      </div>

      <div className="course-sec pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-title">
                <h1> category</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="course-list-sec">
              <div className="all-course">
                <OwlCarousel className='owl-theme' loop margin={10} nav>

                  {/* {
                    allCourse?.map((course, index) => (
                      <div className="course-inner" key={index}>
                        <div className="course-thumb">
                          <div className="teacher-thumb">
                            <img src={course.image} alt="" />
                          </div>
                          <div className="readmore-button">
                            <a href="#">Learn More</a>
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
                          <h2><a href="#">{course.name}</a></h2>
                          <p>{course.description}</p>
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
                  } */}
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
            <div className="col-md-4">
              <div className="course-inner">
                <div className="course-thumb">
                  <img src="assets/img/course_1.jpg" alt="" />
                  <div className="teacher-thumb">
                    <img src="assets/img/teacher_1.jpg" alt="" />
                  </div>
                  <div className="readmore-button">
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="course-meta">
                  <span className="course-price">$250</span>
                  <span className="course-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </span>
                </div>
                <div className="course-desc">
                  <h2><a href="#">Support center</a></h2>
                  <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                </div>
                <div className="course-info">
                  <ul>
                    <li>
                      <a href="#"><i className="fa fa-user"></i>28 Seats</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-clock-o"></i>6 hour</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-heart"></i>Save</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="course-inner">
                <div className="course-thumb">
                  <img src="assets/img/course_2.jpg" alt="" />
                  <div className="teacher-thumb">
                    <img src="assets/img/teacher_2.jpg" alt="" />
                  </div>
                  <div className="readmore-button">
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="course-meta">
                  <span className="course-price">$150</span>
                  <span className="course-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </span>
                </div>
                <div className="course-desc">
                  <h2><a href="#">Web Development</a></h2>
                  <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                </div>
                <div className="course-info">
                  <ul>
                    <li>
                      <a href="#"><i className="fa fa-user"></i>26 Seats</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-clock-o"></i>5 hour</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-heart"></i>Save</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="course-inner">
                <div className="course-thumb">
                  <img src="assets/img/course_3.jpg" alt="" />
                  <div className="teacher-thumb">
                    <img src="assets/img/teacher_3.jpg" alt="" />
                  </div>
                  <div className="readmore-button">
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="course-meta">
                  <span className="course-price">$350</span>
                  <span className="course-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </span>
                </div>
                <div className="course-desc">
                  <h2><a href="#">motion graphics</a></h2>
                  <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                </div>
                <div className="course-info">
                  <ul>
                    <li>
                      <a href="#"><i className="fa fa-user"></i>23 Seats</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-clock-o"></i>6 hour</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-heart"></i>Save</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-title">
                <h1>Our Student Gallery</h1>
                <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor
                  suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac
                  nonummy, egestas mauris .</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="gallery-area">
              <div className="navbarsort">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#navbarfiltr" aria-expanded="false">
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
                  <li data-filter=".etertainment">entertainment</li>
                  <li data-filter=".classNameroom">classNameroom</li>
                </ul>
              </div>

              <div className="gallery-container">



              </div>
              <div className="col-md-12 mb-2">
                <div className="gallery-load-more-btn">
                  <a href="#">Load More Gallery</a>
                </div>
              </div>
            </div>
          </div>
        </div>

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

                    <div className="why-choose-inner">
                      <div className="why-choose-thumb">
                        <img src="assets/img/img12.jpg" alt="" />
                        <div className="why-choose-icon">
                          <img src="assets/img/image.png" alt="" />
                        </div>
                      </div>
                      <div className="why-choose-text">
                        <h2><a href="#">cource-name</a></h2>
                        cource about
                      </div>
                    </div>
                    <div className="why-choose-inner">
                      <div className="why-choose-thumb">
                        <img src="assets/img/img-13.jpg" alt="" />
                        <div className="why-choose-icon">
                          <img src="assets/img/image-1.png" alt="" />
                        </div>
                      </div>
                      <div className="why-choose-text">
                        <h2><a href="#">cource-name</a></h2>
                        cource about
                      </div>
                    </div>
                    <div className="why-choose-inner">
                      <div className="why-choose-thumb">
                        <img src="assets/img/img-14.jpg" alt="" />
                        <div className="why-choose-icon">
                          <img src="assets/img/image-2.png" alt="" />
                        </div>
                      </div>
                      <div className="why-choose-text">
                        <h2><a href="#">cource- name</a></h2>
                        cource about
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>






      </div>
    </>
  )
}
