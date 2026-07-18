import React, { useState } from "react";

function App() {

  const [todos,setTodos] = useState([{
    title:"Go to gym",
    description:"9-5pm"
  },{
     title:"Go to work",
    description:"6-8pm"
  },{
     title:"Go to club",
    description:"10-1am"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:Math.random(),
      description:Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
    </div>
  );
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}



export default App;