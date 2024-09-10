import { call, put, takeLatest } from "redux-saga/effects";
import getAllInquiresServices from "../services/inquiriesGet-services";
import { getInquiryError, getInquirySuccess } from "../actions/addToInquiry.action";
import { INQUIRY_GET_START } from "../constants/inquries/addToInquiry-constants";


function* getInquries(action) {
    try {
        const response = yield call(getAllInquiresServices, action.payload)
        yield put(getInquirySuccess(response))
    } catch (error) {
        yield put(getInquiryError(error.message))
    }
}
function* getAllInquriesSaga() {
    yield takeLatest(INQUIRY_GET_START, getInquries)
}
export default getAllInquriesSaga