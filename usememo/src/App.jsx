//un-neccessary expensive task se bachne ke liye use-Memo  hook ka use krtee h
import { useMemo, useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)


  function expensiveTask(num){
    console.log("Inside Expensive Task")
    for(let i =0;i<=100000000;i++){
    }
    return num*2;
  }
  let doubleval = useMemo(() => expensiveTask(input),[input]);


  return (
 <div className='container'>
  <button onClick={() => setCount(count+1)}>Increment</button>

  <div>
    count:{count}
  </div>

<input type="number" placeholder='Enter any Number' value={input} onChange={(e) => setInput(e.target.value)} />

<div>Multiplication: {doubleval}</div>
 </div>
  )
}

export default App
