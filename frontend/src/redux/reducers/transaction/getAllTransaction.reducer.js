import { GET_TRANSACTIONS_ERROR, GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants";

const inititalState = {
    allPayment: []
}
const allPaymentReducer = (state = inititalState, action) => {  
      
    switch (action.type) {
        case GET_TRANSACTIONS_START:
            return {
                ...state
            }

        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                allPayment: action.payload
            }
        case GET_TRANSACTIONS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default allPaymentReducer