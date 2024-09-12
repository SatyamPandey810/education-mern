const userModel = require("../../models/userModel");
async function userDetailsController(req, res) {
    try {
        const logUser = req.userId;
        const user = await userModel.findById(logUser)

        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "user details"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false

        })
    }
}

module.exports = userDetailsController