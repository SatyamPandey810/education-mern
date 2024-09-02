import { INITIATE_TRANSACTIONS_ERROR, INITIATE_TRANSACTIONS_START, INITIATE_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants";

export const initiatePaymentStart = (transactionDetails) => ({
    type: INITIATE_TRANSACTIONS_START,
    payload: transactionDetails
})
export const initiatePaymentSuccess = (data) => ({
    type: INITIATE_TRANSACTIONS_SUCCESS,
    payload: data
})
export const initiatePaymentError = (error) => ({
    type: INITIATE_TRANSACTIONS_ERROR,
    payload: error
})