const courseModel = require("../../models/courses");
const findCoursesByCategoryAndSubcategory = async (req, res) => {

    try {
        const baseUrl = 'http://localhost:8080/uploads/';
        // const courses = await courseModel.aggregate([
        //     {
        //         $lookup: {
        //             from: 'subcategories', // Name of the subcategory collection
        //             localField: 'subcategory',
        //             foreignField: '_id',
        //             as: 'subcategories'
        //         }
        //     },
        //     {
        //         $unwind: '$subcategories'
        //     },
        //     {
        //         $lookup: {
        //             from: 'categories', // Name of the category collection
        //             localField: 'subcategories.category',
        //             foreignField: '_id',
        //             as: 'subcategories.categoryInfo'
        //         }
        //     },
        //     {
        //         $unwind: '$subcategories.categoryInfo'
        //     },
        //     {
        //         $group: {
        //             _id: {
        //                 category: '$subcategories.categoryInfo.name',
        //                 subcategory: '$subcategories.name'
        //             },
        //             courses: {
        //                 $push: {
        //                     _id: '$_id',
        //                     name: '$name',
        //                     image: '$image',
        //                     price: '$price',
        //                     sheet: '$sheet',
        //                     description: '$description',
        //                     status: '$status'
        //                 }
        //             }
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: '$_id.category',
        //             subcategories: {
        //                 $push: {
        //                     subcategory: '$_id.subcategory',
        //                     courses: '$courses'
        //                 }
        //             }
        //         }
        //     }
        // ]);
        const courses = await courseModel.aggregate([
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
                    courses: {
                        $push: {
                            _id: '$_id',
                            name: '$name',
                            image: { $concat: [baseUrl, '$image'] }, // Prepend base URL
                            price: '$price',
                            sheet: '$sheet',
                            description: '$description',
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
                            courses: '$courses'
                        }
                    }
                }
            }
        ]);
        
        courses.forEach(category => {
            category.subcategories.forEach(subcategory => {
                subcategory.courses.forEach(course => {
                    console.log(`Course ID: ${course._id}, Image URL: ${course.image}`);
                });
            });
        });
        return res.status(200).json({
            success: true,
            message: 'Courses fetched successfully',
            data: courses
        });
    } catch (error) {
        console.error('Error fetching courses grouped by category and subcategory:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching courses',
            error: error.message
        });
    }

};
module.exports = findCoursesByCategoryAndSubcategory;