import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ROLE from '../../common/role'
import summaryApi from '../../common';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


export default function UpdateUser({ onClose, name, email, role, userId, funcCall }) {
    const [userRole, setUserRole] = useState("")

    const allUser = useSelector((state) => state.allUser.allUser)
    console.log(allUser);

    const handelOnChange = (event) => {
        setUserRole(event.target.value)
        console.log(event.target.value);
    }

    const updateUserRole = async () => {
        try {
            const fetchResponse = await fetch(summaryApi.updateUser.url, {
                method: summaryApi.updateUser.method,
                credentials: "include",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    role: userRole
                })
            })
            const resonseData = await fetchResponse.json()
            console.log(resonseData);
            if (resonseData.success) {
                toast.success(resonseData.message)
                onClose()
                funcCall()
            }
            return resonseData

        } catch (error) {
            console.error('Error update user', error);
            throw error;
        }
    }

    return (
        <div style={{ width: "400px", backgroundColor: "white", padding: "13px", color: "black" }}>

            <p className='d-flex flex-row-reverse'>
                <FontAwesomeIcon icon={faXmark}
                    onClick={onClose}
                />
            </p>
            <p className='text-capitalize'>Name: {name} </p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <div className='d-flex justify-content-between'>
                <p>Change role</p>
                <select value={userRole} onChange={handelOnChange}>
                    <option>Select role</option>
                    {
                        Object.values(ROLE).map(el => (
                            <option value={el} key={el}>{el}</option>

                        ))

                    }
                </select>
            </div>
            <button className='btn btn-success' onClick={updateUserRole}>Update role</button>

        </div>
    )
}
