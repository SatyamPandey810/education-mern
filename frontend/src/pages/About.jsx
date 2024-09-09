import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
        <div class="pagehding-sec">
			<div class="images-overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="page-heading">
							<h1>About Us</h1>
						</div>
						<div class="breadcrumb-list">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="">about us</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about-us-sec pt-100 pb-100">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="about-desc">
							<h1>Welcome To Our learapress</h1>
                            <p>
                                Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit amet, justo
                                nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim
                            </p>
                            <p>Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim .</p>
							<Link to="" class="about-btn">Read More</Link>
						</div>
					</div>
					<div class="col-md-6">
						<div class="vedio-inner">
							<img src="assets/img/a.jpg" alt="" />
							<div class="vedio-overly">
								<div class="vedio-button">
									<Link to="https://www.youtube.com/watch?v=YzDz8g1z83U" class="mfp-iframe vedio-play"></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div class="count-up-sec">
			<div class="count-up-sec-overlay"></div>
			<div class="container">
				<div class="row">

					<div class="col-md-3 col-sm-6 col-xs-6 inner">
						<div class="count-up-inner">
							<div class="countup-text">
								<h2 class="counter">246</h2>
								<h4>Expert Instructor</h4>
							</div>
						</div>
					</div>


					<div class="col-md-3 col-sm-6 col-xs-6 inner">
						<div class="count-up-inner">
							<div class="countup-text">
								<h2 class="counter">416</h2>
								<h4>happy student</h4>
							</div>
						</div>
					</div>


					<div class="col-md-3 col-sm-6 col-xs-6 inner">
						<div class="count-up-inner">
							<div class="countup-text">
								<h2 class="counter">648</h2>
								<h4>course Done</h4>
							</div>
						</div>
					</div>


					<div class="col-md-3 col-sm-6 col-xs-6 inner">
						<div class="count-up-inner">
							<div class="countup-text">
								<h2 class="counter">824</h2>
								<h4>award winner</h4>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>


		<div class="instructor-page-sec pt-100 pb-70">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="sec-title">
							<h1>Our Expert Instructor</h1>
							<div class="border-shape"></div>
							<p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="instructor-member">
							<div class="instructor-member-thumb">
								<img src="assets/img/teacher_1.jpg" alt="" />
								<div class="instructor-overlay">
									<ul>
										<li><Link to=""><i class="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i class="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i class="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i class="fa fa-google"></i></Link></li>
										<li><Link to=""><i class="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Isabella</h2>
							<h3>Web Development</h3>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="instructor-member">
							<div class="instructor-member-thumb">
								<img src="assets/img/teacher_2.jpg" alt="" />
								<div class="instructor-overlay">
									<ul>
										<li><Link to=""><i class="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i class="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i class="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i class="fa fa-google"></i></Link></li>
										<li><Link to=""><i class="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Christopher</h2>
							<h3>Article Writing</h3>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="instructor-member">
							<div class="instructor-member-thumb">
								<img src="assets/img/teacher_3.jpg" alt="" />
								<div class="instructor-overlay">
									<ul>
										<li><Link to=""><i class="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i class="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i class="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i class="fa fa-google"></i></Link></li>
										<li><Link to=""><i class="fa fa-skype"></i></Link></li>
									</ul>
								</div>
							</div>
							<h2>Benjamin</h2>
							<h3>Graphics Design</h3>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="instructor-member">
							<div class="instructor-member-thumb">
								<img src="assets/img/teacher_4.jpg" alt="" />
								<div class="instructor-overlay">
									<ul>
										<li><Link to=""><i class="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i class="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i class="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i class="fa fa-google"></i></Link></li>
										<li><Link to=""><i class="fa fa-skype"></i></Link></li>
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
