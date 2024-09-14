import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePaymentStart, getAllPaymentStart } from '../../redux/actions/transactions/getAllTransactions.action'
import moment from "moment"
import { getSubCategoryStart } from '../../redux/actions/getSubCategory.action'
import { toast } from 'react-toastify';

export default function TransactionOrder() {
    const dispatch = useDispatch()
    const transaction = useSelector((state) => state.allTransaction.allPayment)
    // const allSubCategory = useSelector((state) => state.allSubCategory.allSubCategory)

    useEffect(() => {
        dispatch(getAllPaymentStart())
        dispatch(getSubCategoryStart())
    }, [dispatch])

    const groupedByUser = transaction.reduce((acc, transaction) => {
        const userName = transaction.name;
        if (!acc[userName]) {
            acc[userName] = [];
        }
        acc[userName].push(transaction);
        return acc;
    }, {})


    // transaction delete
    const transactionDeleteHandller = (id) => {
        dispatch(deletePaymentStart(id))
        dispatch(getAllPaymentStart())
        toast.success("Transaction deleted")

    }



    return (
        <div className='container'>
            {Object.keys(groupedByUser).map((userName) => (
                <div key={userName} className='user-tables'>
                    <div className='d-flex align-items-center'>
                        <h2 className='text-light mb-3'>Transactions by: {userName}</h2>

                    </div>
                    <table className="table table-bordered text-light">
                        <thead>
                            <tr style={{ fontSize: '14px' }}>
                                <th className='text-nowrap text-light'>S.No</th>
                                <th className='text-nowrap text-light'>Order Date</th>
                                <th className='text-nowrap text-light'>Name</th>
                                <th className='text-nowrap text-light'>Gender</th>
                                <th className='text-nowrap text-light'>Email</th>
                                <th className='text-nowrap text-light'>Phone</th>
                                <th className='text-nowrap text-light'>Amount</th>
                                <th className='text-nowrap text-light'>Course</th>
                                <th className='text-nowrap text-light'>Course Sub-Category</th>
                                <th className='text-nowrap text-light'>Course Category</th>
                                <th className='text-nowrap text-light'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupedByUser[userName].map((transaction, index) => (
                                <tr style={{ fontSize: '14px' }} key={transaction._id}>
                                    <td>{index + 1}.</td>
                                    <td className='text-nowrap'>{moment(transaction.createdAt).format('ll')}</td>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.gender}</td>
                                    <td>{transaction.email}</td>
                                    <td>{transaction.phone}</td>
                                    <td>{transaction.amount}</td>
                                    <td>
                                        {transaction.courseId?.length > 0 ? (
                                            transaction.courseId.map((course) => (
                                                <div key={course._id}>
                                                    <div className='text-lowercase'>Course Name: {course.name}</div>
                                                    <div>Price: {course.price} /-</div>
                                                </div>
                                            ))
                                        ) : (
                                            <div>No courses available</div>
                                        )}
                                    </td>
                                    <td>
                                        {transaction.courseId?.length > 0 ? (
                                            transaction.courseId.map((course) => (
                                                <div key={course._id}>
                                                    {course.subcategory?.length > 0 ? (
                                                        course.subcategory.map((subcat) => (
                                                            <div key={subcat._id}>
                                                                {subcat.name}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div>No subcategories available</div>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div>No subcategories available</div>
                                        )}
                                    </td>
                                    <td>
                                        {transaction.courseId?.length > 0 ? (
                                            transaction.courseId.map((course) => (
                                                <div key={course._id}>
                                                    {course.subcategory?.length > 0 ? (
                                                        course.subcategory.map((subcat) => (
                                                            <div key={subcat._id}>
                                                                {subcat.category?.length > 0 ? (
                                                                    subcat.category.map((cat) => (
                                                                        <div key={cat._id}>
                                                                            {cat.name}
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div>No categories available</div>
                                                                )}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div>No subcategories available</div>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div>No categories available</div>
                                        )}
                                    </td>
                                    <td>  <button className='btn btn-danger mb-1 mx-2' onClick={() => transactionDeleteHandller(transaction._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}

        </div>
    )
}
