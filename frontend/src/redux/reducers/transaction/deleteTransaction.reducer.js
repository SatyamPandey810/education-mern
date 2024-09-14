import { DELETE_TRANSACTIONS_ERROR, DELETE_TRANSACTIONS_START, DELETE_TRANSACTIONS_SUCCESS } from "../../constants/transaction/transaction-constants";

const initialState = {
    transactions: []
}
const deleteTransactionReducer = (state = initialState, action) => {
    switch (action.payload) {
        case DELETE_TRANSACTIONS_START:
            return {
                ...state
            }

        case DELETE_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id !== action.payload
                ),
            }
        case DELETE_TRANSACTIONS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}
export default deleteTransactionReducer  