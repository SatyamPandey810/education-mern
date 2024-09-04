import { GET_TRANSACTIONS_ERROR, GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants"

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