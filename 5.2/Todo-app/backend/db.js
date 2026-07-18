const mongoose = require('mongoose');
const { string } = require('zod');
const dns = require('dns');
const connectDB = require('./config');

dns.setServers([
   "1.1.1.1",
   "8.8.8.8"
])

connectDB();

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {todo};
