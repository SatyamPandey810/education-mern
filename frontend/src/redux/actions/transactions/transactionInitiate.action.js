import { INITIATE_TRANSACTIONS_ERROR, INITIATE_TRANSACTIONS_START, INITIATE_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants";

export const initiatePaymentStart = (formData) => ({
    type: INITIATE_TRANSACTIONS_START,
    payload: formData
})
export const initiatePaymentSuccess = (paymentUrl) => ({
    type: INITIATE_TRANSACTIONS_SUCCESS,
    payload: paymentUrl
})
export const initiatePaymentError = (error) => ({
    type: INITIATE_TRANSACTIONS_ERROR,
    payload: error
})