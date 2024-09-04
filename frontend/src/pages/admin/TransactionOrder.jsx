import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPaymentStart } from '../../redux/actions/transactions/getAllTransactions.action'

export default function TransactionOrder() {
    const dispatch = useDispatch()
    const allTransaction = useSelector((state) => state.allTransaction?.allTransaction)


    console.log(allTransaction);

    useEffect(() => {
        dispatch(getAllPaymentStart())
    }, [dispatch])

    return (
        <div>TransactionOrder</div>
    )
}
