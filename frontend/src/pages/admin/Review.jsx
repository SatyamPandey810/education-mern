import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInquiryStart, getInquiryStart } from '../../redux/actions/addToInquiry.action'
import { toast } from 'react-toastify'
import moment from "moment"

export default function Review() {
    const dispatch = useDispatch()
    const inquires = useSelector((state) => state.allInquries?.inquires)

    console.log(inquires);

    useEffect(() => {
        dispatch(getInquiryStart())
    }, [dispatch])


    // inqury deleted handller
    const deleteCourseHandle = (id) => {
        dispatch(deleteInquiryStart(id))
        dispatch(getInquiryStart())
        toast.success("Inquiry deleted successfully")
    }

    return (
        <div className='container'>
            <h1 className='text-light fs-1 mb-4 text-center'>Inquries</h1>
            <table className="table table-bordered">
                <thead>
                    <tr className='text-light text-center'>
                        <th className='text-center'>S no.</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Gender</th>
                        <th className='text-center'>E-mail</th>
                        <th className='text-center'>Phone</th>
                        <th className='text-center'>Message</th>
                        <th className='text-center'>Inquiry date</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inquires?.data.map((inq, index) => (
                            <tr>
                                <td className='text-center'>{index + 1} .</td>
                                <td className='text-capitalize'>{inq.name}</td>
                                <td>{inq.gender}</td>
                                <td>{inq.email}</td>
                                <td>{inq.phone}</td>
                                <td>{inq.message}</td>
                                <td>{moment(inq.createdAt).format('ll')}</td>
                                <td><button className='btn btn-danger' onClick={() => deleteCourseHandle(inq._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
