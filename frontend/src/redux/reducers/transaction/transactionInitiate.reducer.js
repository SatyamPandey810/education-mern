import { INITIATE_TRANSACTIONS_ERROR, INITIATE_TRANSACTIONS_START, INITIATE_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants";

const initialState = {
    transactionDetails: null
}
const transactionInitiateReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATE_TRANSACTIONS_START:
            return {
                ...state,
            }
        case INITIATE_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactionDetails: action.payload
            }

        case INITIATE_TRANSACTIONS_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
          return state
    }
}
export default transactionInitiateReducer