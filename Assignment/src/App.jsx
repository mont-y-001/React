import { useState } from 'react'
import {Assignment1} from './components/Assignment1'
import {Assignment2} from './components/Assignment2'
import {Assignment3} from './components/Assignment3'
import {Assignment4} from './components/Assignment4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
{/* <Assignment1/> */}
{/* <Assignment2/> */}
{/* <Assignment3/> */}

{/* useRef */}
<Assignment4/>
    </div>
  )
}

export default App
