const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/user-registration/userSignUp")
const userLoginController = require('../controller/user-registration/userLogin')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/user-registration/userDetails')
const getAlluserController = require('../controller/user-registration/getAllUser')
const userLogOutController = require('../controller/user-registration/userLogout')
const updateUserController = require('../controller/user-registration/userUpdate')
const { getAllSubcategories, subCategoryController } = require('../controller/subCategories/subCategoryController')
const { uploadCategoryController, getAllCategoriesController, updateCategoriesController } = require('../controller/categories/categoryController')
const { coursesController, getAllCourses } = require('../controller/courses/coursesController')


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
router.post('/update-category',authToken, updateCategoriesController)
// subCategory upload route
router.post("/subcategory", subCategoryController)
// subCategory find route
router.get("/get-subcategories", getAllSubcategories)
// courses upload route
router.post("/course", authToken, coursesController)
// courses find route
router.get("/get-course", authToken, getAllCourses)




module.exports = router