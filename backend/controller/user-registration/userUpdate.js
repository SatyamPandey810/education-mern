const userModel = require("../../models/userModel");

async function updateUserController(req, res) {
    try {
        const sessionUser = req.userId
        console.log(sessionUser);

        const { userId, name, email, role } = req.body
        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }
        const user = await userModel.findById(sessionUser)

        console.log("user role", user.role);

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)
        res.json({
            data: updateUser,
            message: "user Updated",
            success: true,
            error: false
        })


    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}
module.exports = updateUserController