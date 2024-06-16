const Task = require('../models/task');  // Assuming the Task model is correctly defined in '../models/task'

// 1. Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Cannot get tasks' });
    }
};

// 2. Get a specific task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Create a new task
exports.createTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        priority: req.body.priority,
        dueDate: req.body.dueDate,
        userId: req.user.id,
    });

    try {
        const newTask = await task.save();
        res.status(200).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4. Update a task by ID
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Delete a task by ID
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
