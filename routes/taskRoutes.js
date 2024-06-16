const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;
const taskController = require('../controllers/taskController');

// Middleware for user authentication (simulated)
const authenticateUser = (req, res, next) => {
    // Simulating user authentication by setting req.user with a valid ObjectId
    req.user = { id: new ObjectId() }; // Generate a new ObjectId for demonstration
    next();
};

router.use(authenticateUser);

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
