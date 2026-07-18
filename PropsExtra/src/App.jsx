import React,{useState} from 'react'
import './App.css'
// import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>
      {/* <Card name="Mohit Yadav">
      </Card> */}
    </div>
  )
}

export default App
