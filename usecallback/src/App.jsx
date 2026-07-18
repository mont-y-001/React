//useCallback-> basically function ko re run hone se rokta h aur freeze kr deta h and we can give dependency[] ki kb hame create krna h
//usememo-> ye function ko re run hone se rokta h
import './App.css'
import { useCallback, useState } from 'react';
import ChildComponents from './components/ChildComponents';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(()=>{
    setCount(count+1);
  },[]);

  return (
    <div className='container'>
      <button onClick={handleClick}>Increment</button>
      <br />
      <div>count: {count}</div>
      <br />
      <div ><ChildComponents buttonName="Click ME" /></div>
    </div>
  )
}

export default App
