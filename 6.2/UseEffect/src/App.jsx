import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [selectId, setSelectId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectId(1)}>1</button>
      <button onClick={() => setSelectId(2)}>2</button>
      <button onClick={() => setSelectId(3)}>3</button>
      <button onClick={() => setSelectId(4)}>4</button>
      <button onClick={() => setSelectId(prev => prev + 1)}>
        +
      </button>

      <Todo id={selectId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/todos/${id}`)
      .then((response) => {
        setTodo(response.data);
      });
  }, [id]);

  return (
    <div>
      <h3>ID: {id}</h3>
      <h1>{todo.todo}</h1>
      <p>{todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>
    </div>
  );
}

export default App;