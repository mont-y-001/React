import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n){
    const [todos, setTodos] = useState([]);
    const [loading,setloading] = useState(true);


   useEffect(() => {
    const value = setInterval(()=>{
      console.log("new render after 5 sec")
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTodos(res.data);
          setloading(false);
        })
        .catch((err) => console.error(err));
    },n*1000);
    
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      setTodos(res.data);
      setloading(false);
    })
    return ()=>{
      clearInterval(value)
    }
  }, [n]);
      
  
  return {todos,loading};
}


function App() {
  const {todos,loading} = useTodos(5);

  return (
    <>
      {loading ? "...Loading" : todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.completed ? "✅ Completed" : "❌ Pending"}</p>
        </div>
      ))}
    </>
  );
}

export default App;