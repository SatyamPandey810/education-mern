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
const { coursesController, getAllCourses, updateCourseController } = require('../controller/courses/coursesController')
const upload = require('../middleware/fileUpload')
const findCoursesByCategoryAndSubcategory = require('../controller/category-subcategory-courses/findCourse')
const singleCourseController = require('../controller/courses/singleCourseFindController')


// user signup route
router.post('/signup', userSignUpController)
// user login route
router.post('/login', userLoginController);
// user logout route
router.get('/logout', userLogOutController)


// user details route
router.get("/user-details", authToken, userDetailsController);
// all user find route
router.get("/all-user", authToken, getAlluserController);
//update user role
router.post("/update-user", authToken, updateUserController)

// category upload route
router.post("/category", uploadCategoryController)
// category find route
router.get("/get-category", getAllCategoriesController)
// update category
router.post('/update-category', updateCategoriesController)
//delete category
router.post('/delete-category', deleteCategoryController)
// subCategory upload route
router.post("/subcategory", subCategoryController)
// subCategory find route
router.get("/get-subcategories", getAllSubcategories)
// subCategory update route
router.post('/update-subcategory', updateSubCategory)
// delete SubCategory
router.post("/delete-subcategory", deleteSubCategory)
// courses upload route
router.post("/course", upload.single('image'), coursesController)
// courses find route
router.get("/get-course", getAllCourses)
// course update route
router.post("/update-course", upload.single('image'), updateCourseController)
// course find category and subcategory wise route
router.get('/courses', findCoursesByCategoryAndSubcategory)
//football route
router.get("/single-course/:id", singleCourseController)


module.exports = router