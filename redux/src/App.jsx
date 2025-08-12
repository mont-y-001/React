import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const [amount,setAmount] = useState(0);
 
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncreamentClick(){
    dispatch(increment());
  }

  function handleDecreamentClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncrClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className="container">
  <div className="button-group">
    <button onClick={handleIncreamentClick}> + </button>
    <p className="counter-display">Count: {count}</p>
    <button onClick={handleDecreamentClick}> - </button>
  </div>

  <button className="reset-btn" onClick={handleResetClick}>Reset</button>

  <div className="button-group">
    <input
      type="number"
      value={amount}
      placeholder="Enter Amount"
      onChange={(e) => setAmount(Number(e.target.value))}
    />
    <button onClick={handleIncrClick}>INC BY AMOUNT</button>
  </div>
</div>

  )
}

export default App
