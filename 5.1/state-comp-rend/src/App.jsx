import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Wake up early",
      description: "At 4:00 AM",
    },
    {
      title: "Go to Gym",
      description: "5:00 AM - 7:00 AM",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "Study React",
        description: "Practice useState Hook",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default App;