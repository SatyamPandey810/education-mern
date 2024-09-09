import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Services from '../pages/Services'
import ContactUs from '../pages/ContactUs'
import Login from '../pages/user-registration/Login'
import SignUp from '../pages/user-registration/SignUp'
import AdminPanel from '../pages/admin/AdminPanel'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import CoursesCategory from '../components/CoursesCategory'
// import BlogsCategory from '../components/BlogsCategory'
import ApplyNow from '../pages/ApplyNow'
import ThankuPage from '../pages/ThankuPage'

export default function Router() {
    const location = useLocation()
    const noHeaderFooterRoutes = [ '/admin-dashboard/total-user', "/admin-dashboard",'*'];
    return (
        <>
            {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/course' element={<Courses />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/category/:id' element={<CoursesCategory />} />
                {/* <Route path='/categories/:id' element={<BlogsCategory />} /> */}
                <Route path='/applying' element={<ApplyNow/>}/>
                <Route path="/success" element={<ThankuPage/>}/>

                <Route path='/admin-dashboard'>
                    <Route path='' element={<AdminPanel />} />
                    {/* <Route path='total-user' element={<TotalUser />} /> */}
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
        </>
    )
}



