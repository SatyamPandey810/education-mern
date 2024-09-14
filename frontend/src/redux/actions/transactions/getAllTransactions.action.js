import { DELETE_TRANSACTIONS_ERROR, DELETE_TRANSACTIONS_START, DELETE_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_ERROR, GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants"

export const getAllPaymentStart = () => ({
    type: GET_TRANSACTIONS_START,

})
export const getAllPaymentSuccess = (allPayment) => ({
    type: GET_TRANSACTIONS_SUCCESS,
    payload: allPayment
})
export const getAllPaymentError = (error) => ({
    type: GET_TRANSACTIONS_ERROR,
    payload: error
})


// delete transactions
export const deletePaymentStart = (id) => ({
    type: DELETE_TRANSACTIONS_START,
    payload: id
})
export const deletePaymentSuccess = (id) => ({
    type: DELETE_TRANSACTIONS_SUCCESS,
    payload: id
})
export const deletePaymentError = (error) => ({
    type: DELETE_TRANSACTIONS_ERROR,
    payload: error
})