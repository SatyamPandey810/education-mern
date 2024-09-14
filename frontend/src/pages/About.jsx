import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
        <div className="pagehding-sec">
			<div className="images-overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="page-heading">
							<h1>About Us</h1>
						</div>
						<div className="breadcrumb-list">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="">about us</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="about-us-sec pt-100 pb-100">
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
							<Link to="" className="about-btn">Read More</Link>
						</div>
					</div>
					<div className="col-md-6">
						<div className="vedio-inner">
							<img src="assets/img/a.jpg" alt="" />
							<div className="vedio-overly">
								<div className="vedio-button">
									<Link to="https://www.youtube.com/watch?v=YzDz8g1z83U" className="mfp-iframe vedio-play"></Link>
								</div>
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
							<div className="countup-text">
								<h2 className="counter">246</h2>
								<h4>Expert Instructor</h4>
							</div>
						</div>
					</div>


					<div className="col-md-3 col-sm-6 col-xs-6 inner">
						<div className="count-up-inner">
							<div className="countup-text">
								<h2 className="counter">416</h2>
								<h4>happy student</h4>
							</div>
						</div>
					</div>


					<div className="col-md-3 col-sm-6 col-xs-6 inner">
						<div className="count-up-inner">
							<div className="countup-text">
								<h2 className="counter">648</h2>
								<h4>course Done</h4>
							</div>
						</div>
					</div>


					<div className="col-md-3 col-sm-6 col-xs-6 inner">
						<div className="count-up-inner">
							<div className="countup-text">
								<h2 className="counter">824</h2>
								<h4>award winner</h4>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>


		<div className="instructor-page-sec pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sec-title">
							<h1>Our Expert Instructor</h1>
							<div className="border-shape"></div>
							<p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-6 col-xs-12">
						<div className="instructor-member">
							<div className="instructor-member-thumb">
								<img src="assets/img/teacher_1.jpg" alt="" />
								<div className="instructor-overlay">
									<ul>
										<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i className="fa fa-google"></i></Link></li>
										<li><Link to=""><i className="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Isabella</h2>
							<h3>Web Development</h3>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-12">
						<div className="instructor-member">
							<div className="instructor-member-thumb">
								<img src="assets/img/teacher_2.jpg" alt="" />
								<div className="instructor-overlay">
									<ul>
										<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i className="fa fa-google"></i></Link></li>
										<li><Link to=""><i className="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Christopher</h2>
							<h3>Article Writing</h3>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-12">
						<div className="instructor-member">
							<div className="instructor-member-thumb">
								<img src="assets/img/teacher_3.jpg" alt="" />
								<div className="instructor-overlay">
									<ul>
										<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i className="fa fa-google"></i></Link></li>
										<li><Link to=""><i className="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Benjamin</h2>
							<h3>Graphics Design</h3>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-12">
						<div className="instructor-member">
							<div className="instructor-member-thumb">
								<img src="assets/img/teacher_4.jpg" alt="" />
								<div className="instructor-overlay">
									<ul>
										<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i className="fa fa-google"></i></Link></li>
										<li><Link to=""><i className="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Michael</h2>
							<h3>Apps Development</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}
