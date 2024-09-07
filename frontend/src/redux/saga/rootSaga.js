import { all, fork } from "redux-saga/effects"
import userSaga from "./user.saga"
import allUserSaga from "./getAllUser.saga"
import logoutSaga from "./logutUser.saga"
import uploadCategorySaga from "./uploadCategory.saga"
import getAllCategorySaga from "./getAllCategory.saga"
import updateCategorySaga from "./updateCategory.saga"
import uploadSubCategorySaga from "./uploadSubCategory.saga"
import getAllSubCategorySaga from "./getAllSubCategory.saga"
import courseUploadSaga from "./uploadCourse.saga"
import getAllCourseSaga from "./getAllCourse.saga"
import deleteCategorySaga from "./deletCategory.saga"
import updateSubCategorySaga from "./updateSubCategory.saga"
import deleteSubCategorySaga from "./deleteSubCategory.saga"
import updateCourseSaga from "./updateCourse.saga"
import findCourseByCategoryAndSubcategorySaga from "./findCourseByCategoryAndSubcategory.saga"
import singleCourseSaga from "./singleCourse.saga"
import addToInquirySaga from "./addToInquiry.saga"
// import  blogUploadSaga  from "./blogs/blogUpload.saga"
// import getAllBlogSaga from "./blogs/getBlogs.saga"
// import updateBlogSaga from "./blogs/updateBlog.saga"
// import blogDeleteSaga from "./blogs/deleteBlog.saga"
// import getBlogsCategoryAndSubCategorySaga from "./blogs/getBlogCategoryAndSubCategory.saga"
// import singleBlogSaga from "./blogs/singleBlogFind.saga"
import initiateTranactionSaga from "./transaction/transactionInitiate.saga"
import getTransactionsSaga from "./transaction/getAllTransaction.saga"
import courseDeleteSaga from "./deleteCourse.saga"


export function* root() {
    yield all([
        fork(userSaga),
        fork(allUserSaga),
        fork(logoutSaga),
        fork(uploadCategorySaga),
        fork(getAllCategorySaga),
        fork(updateCategorySaga),
        fork(uploadSubCategorySaga),
        fork(getAllSubCategorySaga),
        fork(courseUploadSaga),
        fork(getAllCourseSaga),
        fork(deleteCategorySaga),
        fork(updateSubCategorySaga),
        fork(deleteSubCategorySaga),
        fork(updateCourseSaga),
        fork(findCourseByCategoryAndSubcategorySaga),
        fork(singleCourseSaga),
        fork(addToInquirySaga),
        // fork(blogUploadSaga),
        // fork(getAllBlogSaga),
        // fork(updateBlogSaga),
        // fork(blogDeleteSaga),
        // fork(getBlogsCategoryAndSubCategorySaga),
        // fork(singleBlogSaga),
        fork(initiateTranactionSaga),
        fork(getTransactionsSaga),
        fork(courseDeleteSaga)
    ])
}