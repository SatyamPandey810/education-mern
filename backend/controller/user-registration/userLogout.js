async function userLogOutController(req, res) {
    try {
        res.clearCookie("token")

        res.json({
            message: "Logout Successfully",
            error: false,
            success: true,
            data: []
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}
module.exports = userLogOutController