const userModel = require("../../models/userModel")
const bcrypt = require('bcrypt')

async function userSignUpController(req, res) {
    try {
        const { name, email, password } = req.body

        if (!email) {
            return res.status(400).json({ message: "Please provide email", error: true, success: false })
        }
        if (!password) {
            return res.status(400).json({ message: "Please provide password", error: true, success: false })
        }
        if (!name) {
            return res.status(400).json({ message: "Please provide username", error: true, success: false })

        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists", error: true, success: false });
        }


        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt)

        if (!hashPassword) {
            throw new Error("somthing went wrong")
        }
        const payload = {
            ...req.body,
            role: "USER",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User signup successfully"
        })


    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }

}
module.exports = userSignUpController