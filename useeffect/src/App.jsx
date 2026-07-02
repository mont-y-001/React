import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const[count, setCount] = useState(0);
  const[total, setTotal] = useState(0);
   //This is for useEffectSnippet
  //first-> side-effect function
  //second -> clean up
  //Third -> comma seperated dependency list 

  //#Variation:1
  //Run on every render

  //  useEffect(() => {
  //   alert("I will run on each render");
  //  });


  //#variation: 2
  //that runs on only first render
  // useEffect(()=> {
  //   alert("I will run only on 1st render");
  // }, [])


  //#variation: 3
  // useEffect(()=>{
  //   alert("I will run every time when count is updated")
  // }, [count])

  //#variation 4
  //Multiple Dependencies
  // useEffect(()=>{
  //   alert("i will run every time when Time/Count is updated")
  // }, [count,total])

  //#Variation: 5
useEffect(()=>{
  alert("Count is updated")
  return ()=> {
    alert("Count is unmounted from UI")
  }
}, [count])

   function handleClick(){
    setCount(count + 1);
   }

   function handleClickTotal(){
    setTotal(total + 1);
   }
 
  return (
   <div>
   <button onClick={handleClick }>Update Count</button>
   <br />
   count is: {count}   <br  />
   <button onClick={handleClickTotal }>Update Total</button>
   <br />
   Total is: {total}
   </div>
  )
}

export default App
