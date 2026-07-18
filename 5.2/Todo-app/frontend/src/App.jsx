import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';


function App() {
  const [todos, settodos] = useState([])

  async function fetchTodos() {
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    settodos(json.todos);
  }

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((json) => settodos(json.todos));
  }, []);

  return (
    <div>
  <CreateTodo onTodoCreated={fetchTodos}/>
  <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
