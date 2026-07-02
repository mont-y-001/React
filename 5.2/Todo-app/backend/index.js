const express = require('express');
const cors = require('cors');
const app = express();
const {createTodo, updateTodo} = require('./types');
const{todo} = require('./db')

app.use(cors());
app.use(express.json());

app.post('/todo',async (req,res)=>{
  const createPayload = req.body;
  const ParsedPayload =createTodo.safeParse(createPayload);
  if(!ParsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong input"
    })
    return;
  }
  await todo.create({
      title: createPayload.title,
       description:createPayload.description,
       completed:false
  })
  res.json({
    msg:"Todo created successfully"
  })
})

app.get('/todos',async (req,res)=>{
     const todos = await todo.find({});
     res.json({
        todos
     })
})

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const ParsedPayload = updateTodo.safeParse(updatePayload);
    if(!ParsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong input"
    });
  }
  await todo.updateOne({
    _id:req.body._id
  },{
    completed:true
  })
  res.json({
    msg:"todo marked as completed"
  })
})

app.listen(3000);