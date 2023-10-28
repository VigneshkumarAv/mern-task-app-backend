const dotenv = require("dotenv").config();
const express = require('express');
const connectDB = require('./config/connectDB')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose =require('mongoose')
const Task = require('./model/taskModel')
const taskRoute = require('./routes/taskRoute')
const cors = require('cors')
//Middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
  origin: ["http://localhost:3000/","https://mern-task-app-vignesh.onrender.com"]
}))
app.use("api/tasks",taskRoute);

//Routes

app.get("/", (req,res)=> {
    res.send("Home Page")
})

/* app.post("/api/tasks", async(req,res)=> {

  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    console.log(error);
  }
})

app.get("/api/tasks", async (req, res)=> {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    console.log(error)
  }
})
 */
mongoose.connect(process.env.MONGO_URI).then(()=> {
    app.listen(PORT, () => {
        console.log(`running on port ${PORT}`)
    })
})







/* const startServer = async() => {
  try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`running on port ${PORT}`)
    })
  } catch (error) {
    console.log('error',error);
  }
}
startServer();  */