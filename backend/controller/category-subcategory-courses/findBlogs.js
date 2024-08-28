const blogModel = require("../../models/blogModel");

const findBlogsCategoryAndSubCategory = async (req, res) => {
    try {
        const baseUrl = 'http://localhost:8080/uploads/';
        const blogs = await blogModel.aggregate([
            {
                $lookup: {
                    from: 'subcategories',
                    localField: 'subcategory',
                    foreignField: '_id',
                    as: 'subcategories'
                }
            },
            {
                $unwind: '$subcategories'
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'subcategories.category',
                    foreignField: '_id',
                    as: 'subcategories.categoryInfo'
                }
            },
            {
                $unwind: '$subcategories.categoryInfo'
            },
            {
                $group: {
                    _id: {
                        category: '$subcategories.categoryInfo.name',
                        subcategory: '$subcategories.name'
                    },
                    blogs: {
                        $push: {
                            _id: '$_id',
                            heading: '$heading',                         
                            image: { $concat: [baseUrl, '$image'] }, // Prepend base URL
                            price: '$price',
                            loaction:'$loaction',
                            paragraph: '$paragraph',
                            status: '$status'
                        }
                    }
                }
            },
            {
                $group: {
                    _id: '$_id.category',
                    subcategories: {
                        $push: {
                            subcategory: '$_id.subcategory',
                            blogs: '$blogs'
                        }
                    }
                }
            }
        ]);

        blogs.forEach(category => {
            category.subcategories.forEach(subcategory => {
                subcategory.blogs.forEach(blog => {
                    console.log(`blog ID: ${blog._id}, Image URL: ${blog.image}`);
                });
            });
        });
        return res.status(200).json({
            success: true,
            message: 'blogs fetched successfully',
            data: blogs
        });
    } catch (error) {
        console.error('Error fetching blogs grouped by category and subcategory:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching blogs',
            error: error.message
        });
    }


}
module.exports = findBlogsCategoryAndSubCategory