import React, { useEffect } from 'react'
import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from './redux/actions/user.action';


export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
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
