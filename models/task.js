const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
    },
    dueDate: {
        type: Date,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
