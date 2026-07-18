import { useEffect, useState } from 'react'


function App() {
  const [render, setRender] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setRender(false);
    }, 3000);
  },[])
  return (
    <div>
    {render ? <MyComponent/> :<h2>Waiting for 10 seconds...</h2>}  
   
    </div>
  )
}

function MyComponent(){
  const [count, setCount] = useState(0);

 useEffect(()=>{
  console.error("componenet Mounted");

  return () =>{
    console.log("component Unmounted");
  }
 },[]);

  return <div>
  <p>{count}</p>
  <button onClick={()=>setCount(count+1)}>Increase</button>
  {/* <button onClick={Increase}>Increase</button> */}
  </div>
}

export default App
