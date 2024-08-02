const userModel = require("../../models/userModel");

async function getAlluserController(req,res) {
    try {
        const allUser = await userModel.find()
        res.status(200).json({
            data: allUser,
            message: "fetch all user",
            success: true,
            error: false
        })



    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false

        })
    }
}
module.exports=getAlluserController