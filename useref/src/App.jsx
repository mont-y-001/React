
import { useEffect,useRef,useState } from 'react';
import './App.css'

function App() {
   const [count, setCount] = useState(0);
   let val = useRef(0);
   let btnRef = useRef();


   function handleIncrement(){
    val.current = val.current+1;
    console.log("Value of val: ", val.current);
    setCount(count+1);
   }

   function changeColor(){
    btnRef.current.style.backgroundColor = "red";
   }
     
   useEffect(()=>{
    console.log("main firse render hogya hu");
   })

  return (
    <div className='container'>
      <button ref={btnRef} 
       onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={changeColor}>Change color of 1st button</button>

      <div>
        count: {count}
      </div>
    </div>
  )
}

export default App
