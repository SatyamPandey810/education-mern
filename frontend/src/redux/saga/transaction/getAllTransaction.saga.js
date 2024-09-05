import { call, put, takeLatest } from "redux-saga/effects";
import getAllTransactionServices from "../../services/transactions/getAllTransaction-services";
import { getAllPaymentError, getAllPaymentSuccess } from "../../actions/transactions/getAllTransactions.action";
import { GET_TRANSACTIONS_START } from "../../constants/transaction/transaction-constants";

function* getTransactions(action) {
    try {
        const data = yield call(getAllTransactionServices, action.payload)
        yield put(getAllPaymentSuccess(data))
        
    } catch (error) {
        yield put(getAllPaymentError(error.message))
    }
}
function* getTransactionsSaga() {
    yield takeLatest(GET_TRANSACTIONS_START, getTransactions)
}
export default getTransactionsSaga