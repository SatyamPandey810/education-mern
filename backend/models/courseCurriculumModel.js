const mongoose = require("mongoose")

const courseCurriculumSchema = new mongoose.Schema({
    basic: String,
    advance: String,
    intermediate: String,
    time: String,
    lecture: String,
    subcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    }],
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses',
    }
}, { timestamps: true })

const courseCurriculumModel = mongoose.model("course-curriculum", courseCurriculumSchema)
module.exports = courseCurriculumModel