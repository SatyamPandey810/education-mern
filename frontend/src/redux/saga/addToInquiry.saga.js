import { call, put, takeLatest } from "redux-saga/effects";
import addToInquiriesHandller from "../services/addToInquiry-services";
import { uploadInquiryError, uploadInquirySuccess } from "../actions/addToInquiry.action";
import { INQUIRY_UPLOAD_START } from "../constants/inquries/addToInquiry-constants";

function* addToinquiry(action) {
    try {
        const response = yield call(addToInquiriesHandller, action.payload)
        yield put(uploadInquirySuccess(response))
    } catch (error) {
        yield put(uploadInquiryError(error.message))
    }
}
function* addToInquirySaga() {
    yield takeLatest(INQUIRY_UPLOAD_START, addToinquiry)
}
export default addToInquirySaga