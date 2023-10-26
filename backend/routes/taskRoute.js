const express = require('express');
const Task = require('../model/taskModel');
const router = express.Router();
const {createTask, getTasks, getTask, deleteTask,
  updateTask, updateOneTask} = require('../controllers/taskController');
/* This also can be used for optimizing and reducing no of lines */
/* router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask).patch(updateOneTask) */
  router.post("/", createTask/* async(req,res)=> {

    try {
      const task = await Task.create(req.body)
      res.status(200).json(task)
    } catch (error) {
      console.log(error);
    }} */
  /*   console.log(req.body)
    res.send("Task Created") */
  )
  
router.get("/",getTasks /* async (req, res)=> {
    try {
      const tasks = await Task.find()
      res.status(200).json(tasks)
    } catch (error) {
      console.log(error)
    }
  } */)
  

router.get("/:id",getTask)

router.delete("/:id",deleteTask)
router.put("/:id",updateTask)
router.patch("/:id",updateOneTask) // if i have a model and it has several property and i wanted to updated one single property. patch can be used.



module.exports = router;