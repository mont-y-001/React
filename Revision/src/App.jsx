import React,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function Increment(){
    setnum(num+1);
  }
  function Decrement(){
    setnum(num-1);
  }
  return (
    <div>
      <h1 className="text-6xl text-blue-600 font-bold">Tailwind Working ✅</h1>
      <h3>Current value is {num}</h3>
      <button onMouseDown={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App
