const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: function () {
            return this.paymentMethod === 'online';
        },
    },
    access_code: {
        type: String,
        required: function () {
            return this.paymentMethod === 'online';
        },
    },
    authorization_url: {
        type: String,
        required: function () {
            return this.paymentMethod === 'online';
        },
    },
    courseId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }],
    paymentMethod: {
        type: String,
        enum: ['online', 'cod'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'order confirmed', 'order packed', 'order delivered', 'order canceled'],
        default: 'pending',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const paymentModel = mongoose.model("transaction", paymentSchema);

module.exports = paymentModel