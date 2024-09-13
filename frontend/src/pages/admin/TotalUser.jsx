import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserStart } from '../../redux/actions/allUser.action';
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import UpdateUser from './UpdateUser';

export default function TotalUser() {
  const [openUpdateUser, setOpenUpdateUser] = useState(false)
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: ""
  })
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUser.allUser);


  useEffect(() => {
    dispatch(getAllUserStart());
  }, [dispatch]);

  const userData = allUser ? allUser.data : [];

  return (
    <div className='container'>
      <h1 className='text-light p-3 text-center'>Total user</h1>
      <table className="table table-bordered text-light">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Active date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.length > 0 ? userData?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td className='text-capitalize'>{user?.name}</td>
                <td>{user?.email}</td>
                <td className='text-capitalize'>{user?.role}</td>
                <td>{moment(user?.createdAt).format('ll')}</td>
                {/* <td><button className='btn btn-warning'>Edit</button></td> */}
                <td> <FontAwesomeIcon icon={faPenToSquare}
                  onClick={() => {
                    setOpenUpdateUser(true)
                    setUpdateUserDetails(user)
                  }}
                /></td>
              </tr>
            )) : <span>no user</span>
          }
        </tbody>
      </table>
      {
        openUpdateUser && (
          <UpdateUser onClose={() => setOpenUpdateUser(false)}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            funcCall={getAllUserStart}
          />
        )
      }
    </div>
  )
}
