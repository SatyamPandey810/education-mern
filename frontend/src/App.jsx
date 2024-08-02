import React, { useEffect } from 'react'

import Header from './layout/Header';
import Footer from './layout/Footer';
import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from './redux/actions/user.action';


export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  console.log(user);

  useEffect(() => {
    dispatch(getUserStart());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      {/* <Header /> */}
      <Router />
      {/* <Footer /> */}
    </>
  )
}
