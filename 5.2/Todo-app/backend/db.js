const mongoose = require('mongoose');
const { string } = require('zod');
const dns = require('dns');
dns.setServers([
   "1.1.1.1",
   "8.8.8.8"
])

mongoose.connect(
  "mongodb+srv://my266620_db_user:mohit9339@todo-app.xwmycyv.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=todo-app"
);

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {todo};