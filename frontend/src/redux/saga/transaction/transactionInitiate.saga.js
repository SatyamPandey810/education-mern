import { call, put, takeLatest } from "redux-saga/effects";
import initiatePaymentHandller from "../../services/transactions/transactionInitiate-services";
import { initiatePaymentSuccess } from "../../actions/transactions/transactionInitiate.action";
import { INITIATE_TRANSACTIONS_START } from "../../constants/transaction/transaction-constants";

function* initiateTranaction(action) {
    try {
        const { transactionDetails } = action.payload;
        const data = yield call(initiatePaymentHandller, transactionDetails)
        yield put(initiatePaymentSuccess(data))
    } catch (error) {
        yield put(error.message)
    }
}
function* initiateTranactionSaga() {
    yield takeLatest(INITIATE_TRANSACTIONS_START, initiateTranaction)
}
export default initiateTranactionSaga