const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/user-registration/userSignUp")
const userLoginController = require('../controller/user-registration/userLogin')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/user-registration/userDetails')
const getAlluserController = require('../controller/user-registration/getAllUser')
const userLogOutController = require('../controller/user-registration/userLogout')
const updateUserController = require('../controller/user-registration/userUpdate')
const { getAllSubcategories, subCategoryController, updateSubCategory, deleteSubCategory } = require('../controller/subCategories/subCategoryController')
const { uploadCategoryController, getAllCategoriesController, updateCategoriesController, deleteCategoryController } = require('../controller/categories/categoryController')
const { coursesController, getAllCourses, updateCourseController, courseDeleteController } = require('../controller/courses/coursesController')
const upload = require('../middleware/fileUpload')
const findCoursesByCategoryAndSubcategory = require('../controller/category-subcategory-courses/findCourse')
const singleCourseController = require('../controller/courses/singleCourseFindController')
const addToInquiryController = require('../controller/addToInquiries/addToInquiryController')
const paymentController = require('../controller/transactions/paymentController')
const findTransactionController = require('../controller/transactions/findTransactions')
const { courseCurriculumController } = require('../controller/course-curriculum/courseCurriculumController')
const getInquiriesController = require('../controller/addToInquiries/getInquiry')
const deleteinquriesController = require('../controller/addToInquiries/deleteInquries')
const deleteTransactionController = require('../controller/transactions/deleteTransactions')


//user signup route
router.post('/signup', userSignUpController)
//user login route
router.post('/login', userLoginController);
//user logout route
router.get('/logout', userLogOutController)

//user details route
router.get("/user-details", authToken, userDetailsController);
//all user find route
router.get("/all-user", authToken, getAlluserController);
//update user role
router.post("/update-user", authToken, updateUserController)
//category upload route
router.post("/category", uploadCategoryController)
//category find route
router.get("/get-category", getAllCategoriesController)
//update category
router.post('/update-category', updateCategoriesController)
//delete category
router.post('/delete-category', deleteCategoryController)
//subCategory upload route
router.post("/subcategory", subCategoryController)
//subCategory find route
router.get("/get-subcategories", getAllSubcategories)
//subCategory update route
router.post('/update-subcategory', updateSubCategory)
//delete SubCategory
router.post("/delete-subcategory", deleteSubCategory)
//courses upload route
router.post("/course", upload.single('image'), coursesController)
//courses find route
router.get("/get-course", getAllCourses)
//course update route
router.post("/update-course", upload.single('image'), updateCourseController)
//course delete route
router.post("/delete-course", courseDeleteController)
//course find category and subcategory wise route
router.get('/courses', findCoursesByCategoryAndSubcategory)
//single-course find route
router.get("/single-course/:id", singleCourseController)
//addtoinquiry upload route
router.post("/upload-inquiry", addToInquiryController)
//blog upload route
router.post("/courseCurriculum-upload", courseCurriculumController)
//payment request route
router.post("/payment-handller", paymentController)
//total payment find route
router.get("/get-payment", findTransactionController)
//payment delete route
router.post("/delete-payment", deleteTransactionController)
//inquires get route
router.get("/get-inquries", getInquiriesController)
//inquries delete route
router.post("/delete-inquries", deleteinquriesController)

module.exports = router