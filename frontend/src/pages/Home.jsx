import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
  return (
    <>
  <div className="slider">
        <div className="">
          <OwlCarousel className='owl-theme all-slide owl-item' autoplay={true}	autoplayHoverPause={true} items={1} loop margin={10} nav>
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
                <p>
                  Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit amet, justo
                  nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim
                </p>
                <p>Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim .</p>

                <a href="#" className="about-btn">Read More</a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="vedio-inner">
                <img src="admin/uploads/first_sec_image" alt="" />
                <div className="vedio-overly">
                  <div className="vedio-button">
                    <a href="https://www.youtube.com/watch?v=YzDz8g1z83U" className="mfp-iframe vedio-play"></a>
                  </div>
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
                      <span className="course-price">$550</span>
                      <span className="course-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="course-desc">
                      <h2><a href="#">affiliate marketing</a></h2>
                      <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                    </div>
                    <div className="course-info">
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-user"></i>24 Seats</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-clock-o"></i>4 hour</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-heart"></i>Save</a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                      <span className="course-price">$700</span>
                      <span className="course-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="course-desc">
                      <h2><a href="#">Graphics Design</a></h2>
                      <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                    </div>
                    <div className="course-info">
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-user"></i>24 Seats</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-clock-o"></i>4 hour</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-heart"></i>Save</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src="assets/img/course_4.jpg" alt="" />
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
                      <h2><a href="#">Web Development</a></h2>
                      <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                    </div>
                    <div className="course-info">
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-user"></i>24 Seats</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-clock-o"></i>4 hour</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-heart"></i>Save</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src="assets/img/course_3.jpg" alt="" />
                      <div className="teacher-thumb">
                        <img src="assets/img/teacher_1.jpg" alt="" />
                      </div>
                      <div className="readmore-button">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                    <div className="course-meta">
                      <span className="course-price">$450</span>
                      <span className="course-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="course-desc">
                      <h2><a href="#">Search Engine Optimization(SEO)</a></h2>
                      <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                    </div>
                    <div className="course-info">
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-user"></i>24 Seats</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-clock-o"></i>4 hour</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-heart"></i>Save</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src="assets/img/course_5.jpg" alt="" />
                      <div className="teacher-thumb">
                        <img src="assets/img/teacher_2.jpg" alt="" />
                      </div>
                      <div className="readmore-button">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                    <div className="course-meta">
                      <span className="course-price">$450</span>
                      <span className="course-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="course-desc">
                      <h2><a href="#">Article Writing</a></h2>
                      <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                    </div>
                    <div className="course-info">
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-user"></i>24 Seats</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-clock-o"></i>4 hour</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-heart"></i>Save</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src="assets/img/course_6.jpg" alt="" />
                      <div className="teacher-thumb">
                        <img src="assets/img/teacher_3.jpg" alt="" />
                      </div>
                      <div className="readmore-button">
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                    <div className="course-meta">
                      <span className="course-price">$450</span>
                      <span className="course-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="course-desc">
                      <h2><a href="#">Virtual Assitance</a></h2>
                      <p>Ludus nemore qui ex. Verear luptatum principes sit ad.</p>
                    </div>
                    <div className="course-info">
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-user"></i>24 Seats</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-clock-o"></i>4 hour</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-heart"></i>Save</a>
                        </li>
                      </ul>
                    </div>
                  </div>
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


                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item institute">
                  <div className="gallery-item">
                    <img src="assets/img/1.jpg" alt="" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-button">
                          <a href="admin/uploads/gallery/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
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
                          <a href="admin/uploads/gellary/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
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
                          <a href="admin/uploads/gellary/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item classNameroom">
                  <div className="gallery-item">
                    <img src="assets/img/4.jpg" alt="" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-button">
                          <a href="admin/uploads/gellary/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item institute">
                  <div className="gallery-item">
                    <img src="assets/img/5.jpg" alt="" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-button">
                          <a href="admin/uploads/gallery/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item institute">
                  <div className="gallery-item">
                    <img src="assets/img/6.jpg" alt="" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-button">
                          <a href="admin/uploads/gallery/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item institute">
                  <div className="gallery-item">
                    <img src="assets/img/7.jpg" alt="" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-button">
                          <a href="admin/uploads/gallery/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-3 filtr-item institute">
                  <div className="gallery-item">
                    <img src="assets/img/8.jpg" alt="" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-button">
                          <a href="admin/uploads/gallery/image" className="gallery-photo"><i
                            className="fa fa-file-image-o"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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

                <div className="event-inner">
                  <div className="event-thumb">
                    <img src="assets/img/g1.jpg" alt="" />
                    <div className="event-overlay">
                      <a href="event-details.html"><i className="fa fa-external-link"></i></a>
                    </div>
                  </div>
                  <div className="event-desc">
                    <h2><a href="#">Mel apeirian salutatus scripserit ex</a></h2>
                    <div className="event-meta">
                      <ul>
                        <li><i className="fa fa-map-marker"></i>Californiya , United State</li>
                        <li><i className="fa fa-clock-o"></i>08.00 - 11.30</li>
                      </ul>
                    </div>
                    <p>Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert
                      euismod scaevola qui cu.</p>
                  </div>
                </div>

                <div className="event-inner">
                  <div className="event-thumb">
                    <img src="assets/img/g2.jpg" alt="" />
                    <div className="event-overlay">
                      <a href="event-details.html"><i className="fa fa-external-link"></i></a>
                    </div>
                  </div>
                  <div className="event-desc">
                    <h2><a href="#">Mel apeirian salutatus scripserit ex</a></h2>
                    <div className="event-meta">
                      <ul>
                        <li><i className="fa fa-map-marker"></i>Californiya , United State</li>
                        <li><i className="fa fa-clock-o"></i>08.00 - 11.30</li>
                      </ul>
                    </div>
                    <p>Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert
                      euismod scaevola qui cu.</p>
                  </div>
                </div>

                <div className="event-inner">
                  <div className="event-thumb">
                    <img src="assets/img/g3.jpg" alt="" />
                    <div className="event-overlay">
                      <a href="event-details.html"><i className="fa fa-external-link"></i></a>
                    </div>
                  </div>
                  <div className="event-desc">
                    <h2><a href="#">Mel apeirian salutatus scripserit ex</a></h2>
                    <div className="event-meta">
                      <ul>
                        <li><i className="fa fa-map-marker"></i>Californiya , United State</li>
                        <li><i className="fa fa-clock-o"></i>08.00 - 11.30</li>
                      </ul>
                    </div>
                    <p>Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert
                      euismod scaevola qui cu.</p>
                  </div>
                </div>
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
                    <div className="single-post">

                      <div className="single-post-thumb">
                        <img src="assets/img/b1.jpg" alt="" />
                        <div className="single-post-thumb-overlay">
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>Admin</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-calendar"></i>1 Jan 2018</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-comment-o"></i>36</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="single-post-text">
                        <h2><a href="blog-details.html">write a good professional server-side scripting
                          language php code</a></h2>
                        <p>Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu,
                          etiam in massa. Sagittis urna tellus augue montes .</p>
                        <a href="blog-details.html" className="blog-readmore">Continue reading</a>
                      </div>
                    </div>

                    <div className="single-post">
                      <div className="single-post-thumb">
                        <img src="assets/img/b2.jpg" alt="" />
                        <div className="single-post-thumb-overlay">
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>Admin</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-calendar"></i>1 Jan 2018</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-comment-o"></i>36</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="single-post-text">
                        <h2><a href="blog-details.html">Most Popular Python to build desktop apps and web
                          apps</a></h2>
                        <p>Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu,
                          etiam in massa. Sagittis urna tellus augue montes .</p>
                        <a href="blog-details.html" className="blog-readmore">Continue reading</a>
                      </div>
                    </div>

                    <div className="single-post">
                      <div className="single-post-thumb">
                        <img src="assets/img/b3.jpg" alt="" />
                        <div className="single-post-thumb-overlay">
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>Admin</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-calendar"></i>1 Jan 2018</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-comment-o"></i>36</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="single-post-text">
                        <h2><a href="blog-details.html">Java Programing language use for apps, game
                          develop</a></h2>
                        <p>Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu,
                          etiam in massa. Sagittis urna tellus augue montes .</p>
                        <a href="blog-details.html" className="blog-readmore">Continue reading</a>
                      </div>
                    </div>

                    <div className="single-post">
                      <div className="single-post-thumb">
                        <img src="assets/img/b1.jpg" alt="" />
                        <div className="single-post-thumb-overlay">
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>Admin</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-calendar"></i>1 Jan 2018</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-comment-o"></i>36</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="single-post-text">
                        <h2><a href="blog-details.html">write a good professional server-side scripting
                          language php code</a></h2>
                        <p>Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu,
                          etiam in massa. Sagittis urna tellus augue montes .</p>
                        <a href="blog-details.html" className="blog-readmore">Continue reading</a>
                      </div>
                    </div>

                    <div className="single-post">
                      <div className="single-post-thumb">
                        <img src="assets/img/b2.jpg" alt="" />
                        <div className="single-post-thumb-overlay">
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>Admin</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-calendar"></i>1 Jan 2018</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-comment-o"></i>36</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="single-post-text">
                        <h2><a href="blog-details.html">Most Popular Python to build desktop apps and web
                          apps</a></h2>
                        <p>Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu,
                          etiam in massa. Sagittis urna tellus augue montes .</p>
                        <a href="blog-details.html" className="blog-readmore">Continue reading</a>
                      </div>
                    </div>

                    <div className="single-post">
                      <div className="single-post-thumb">
                        <img src="assets/img/b3.jpg" alt="" />
                        <div className="single-post-thumb-overlay">
                          <div className="post-meta">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-user"></i>Admin</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-calendar"></i>1 Jan 2018</a>
                              </li>
                              <li>
                                <a href="#"><i className="fa fa-comment-o"></i>36</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="single-post-text">
                        <h2><a href="blog-details.html">Java Programing language use for apps, game
                          develop</a></h2>
                        <p>Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam pellentesque eu,
                          etiam in massa. Sagittis urna tellus augue montes .</p>
                        <a href="blog-details.html" className="blog-readmore">Continue reading</a>
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
