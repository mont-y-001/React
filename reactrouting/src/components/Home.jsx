import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate();
  function handleClick(){
    Navigate('/about')
  }

  return (
    <div>
      <p>Home PAGE</p>
     <button onClick={handleClick}>Move To About Page</button>
    </div>
  )
}

export default Home
