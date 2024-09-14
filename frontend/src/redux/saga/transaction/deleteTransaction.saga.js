import { call, put, takeLatest } from "redux-saga/effects";
import deleteTransactionService from "../../services/transactions/deleteTransaction-services";
import { deletePaymentError, deletePaymentSuccess } from "../../actions/transactions/getAllTransactions.action";
import { DELETE_TRANSACTIONS_START } from "../../constants/transaction/transaction-constants";

function* deleteTransaction(action) {
    try {
        const response = yield call(deleteTransactionService, action.payload)
        yield put(deletePaymentSuccess(response))
    } catch (error) {
        yield put(deletePaymentError(error.message))
    }
}

function* deleteTransactionSaga() {
    yield takeLatest(DELETE_TRANSACTIONS_START, deleteTransaction)
}

export default deleteTransactionSaga