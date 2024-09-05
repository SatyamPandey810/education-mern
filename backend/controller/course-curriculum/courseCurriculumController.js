const courseCurriculumModel = require("../../models/courseCurriculumModel");
const subCategoryModel = require("../../models/subCategory");

async function courseCurriculumController(req, res) {
    try {
        const { basic, advance, time, intermediate, lecture, subCategoryIds } = req.body;

        console.log("req.body", req.body);

        const blogs = await subCategoryModel.find({ '_id': { $in: subCategoryIds } });

        const newCourseCurriculum = new courseCurriculumModel({
            basic,
            advance,
            intermediate,
            time,
            lecture,
            subcategory: subCategoryIds,
            // courseId:courseId
        })
        const saveCourseCurriculum = await newCourseCurriculum.save()

        res.status(201).json({
            data: saveCourseCurriculum,
            success: true,
            message: "Blog upload successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to upload course',
            success: false,
            error: error.message,
        });
    }
}

// async function getAllBlogs(req, res) {
//     const { categoryId, subCategoryId } = req.query;
//     try {
//         const query = {};
//         if (categoryId) {
//             query['subcategory.category'] = categoryId;
//         }
//         if (subCategoryId) {
//             query.subcategory = subCategoryId;
//         }

//         const blogs = await blogModel.find(query)
//             .populate({
//                 path: 'subcategory',
//                 populate: {
//                     path: 'category',
//                     model: 'category'
//                 }
//             });

//         const blogsWithFullImagePath = blogs.map(blog => {
//             return {
//                 ...blog._doc,
//                 image: blog.image ? `${req.protocol}://${req.get('host')}/uploads/${blog.image}` : null
//             };
//         });

//         res.status(200).json(blogsWithFullImagePath);

//     } catch (error) {
//         res.status(500).json({
//             message: 'Failed to upload course',
//             success: false,
//             error: error.message,
//         });
//     }
// }

// const updateBlogController = async (req, res) => {
//     try {
//         const { _id, ...resBody } = req.body

//         if (req.file) {
//             resBody.image = req.file.filename; // Store the filename or path in the database
//         }

//         const updatedBlog = await blogModel.findByIdAndUpdate(_id, { $set: resBody }, { new: true });

//         res.json({
//             data: updatedBlog,
//             success: true,
//             error: false,
//             message: "Course updated successfully"
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: error.message || error,
//             error: true,
//             success: false
//         });
//     }

// }

// const deleteBlogsController = async (req, res) => {
//     try {
//         const blogId = req.body._id
//         const deletedBlog = await blogModel.deleteOne({ _id: blogId })

//         res.status(200).json({
//             message: "blog deleted successfully",
//             error: false,
//             success: true,
//             data: deletedBlog
//         });

//     } catch (error) {
//         res.status(400).json({
//             message: error.message || error,
//             error: true,
//             success: false

//         })
//     }
// }



module.exports = {
    courseCurriculumController,
    // getAllBlogs,
    // updateBlogController,
    // deleteBlogsController
} 