import { useMemo, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1);
 let counter = useMemo(()=>{
  console.log("called")
   let counter = 0;
  for(let i = 1;i<=inputValue;i++){
   counter += i;
  }
  return counter;

 },[inputValue]);
 
  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value)
      }}  type="text" placeholder='enter number to find out sum' />
      <h3>sum from 1 to {inputValue} is {counter}</h3>
   <button onClick={()=>setCount(count+1)}>count is {count}</button>
    </div>
  )
}

export default App
