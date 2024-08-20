import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import ContactUs from '../pages/ContactUs'
import Login from '../pages/user-registration/Login'
import SignUp from '../pages/user-registration/SignUp'
import AdminPanel from '../pages/admin/AdminPanel'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import TotalUser from '../pages/admin/TotalUser'

export default function Router() {
    const location = useLocation()
    const noHeaderFooterRoutes = ['/sign-in', '/sign-up', '/admin-dashboard/total-user',"/admin-dashboard"];
    return (
        <>
            {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/course' element={<Courses />} />
                <Route path='/services' element={<Services />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                
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



