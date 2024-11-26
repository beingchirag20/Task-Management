const express = require('express');
const Task = require('../models/taskModel');

const router = express.Router()

//Create a Task
router.post('/', async (req, res) => {
    const {title, description} = req.body;
    try{
        const newTask = new Task({title, description});
        await newTask.save();
        res.status(201).json({message: 'Task created successfully'});
        console.log("Task added: ", title)
    }
    catch(err)
    {
        res.status(400).json({message: 'Error creating task'});
    }
});

//Get all task
router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find();
    }
    catch(err)
    {
        res.status(400).json({message: 'Error fetching tasks'});
    }
});

//Update all task
router.put('/:id', async(req, res) => {
    const {id} = req.params;
    const {title, description, completed} = req.body;
    try{
        const task = await Task.findByIdAndUpdate(id, {title, description, completed}, {new: true});
        res.json(updatedTask)
    }
    catch(err)
    {
        res.status(400).json({message: 'Error updating task'});
    }
});

//Delete Task
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        await Task.findByIdAndDelete(id);
        res.json({message: 'Task deleted successfully'});
    }
    catch(err)
    {
        res.status(400).json({message: 'Error deleting task'});
    }
})

module.exports = router;