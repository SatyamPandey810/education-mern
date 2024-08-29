const blogModel = require("../../models/blogModel");

const singleBlogController = async (req, res) => {
    try {
        const blogId = req.params.id


        const blog = await blogModel.findById(blogId).populate('subcategory').exec();
        // if (!blog) {
        //     return res.status(404).json({ success: false, message: "Blogs not found" });
        // }
        const SingleBlogsWithFullImagePath = {
            ...blog._doc,
            image: blog.image ? `${req.protocol}://${req.get('host')}/uploads/${blog.image}` : null
        };

        res.status(200).json({
            data: SingleBlogsWithFullImagePath,
            success: true,
            message: "Blog find successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Failed to find blog',
            success: false,
            error: error.message,
        });
    }
}
module.exports = singleBlogController