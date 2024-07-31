const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/user-registration/userSignUp")
const userLoginController = require('../controller/user-registration/userLogin')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/user-registration/userDetails')


// user signup route
router.post('/signup', userSignUpController)
// user login route
router.post('/login', userLoginController);
// user details route
router.get("/user-details", authToken, userDetailsController);





module.exports = router