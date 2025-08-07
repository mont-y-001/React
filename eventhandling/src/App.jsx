import { useState } from 'react'
import './App.css'


function App() {
  function handleClick() {
    alert("I am clicked");
  }

  function handleMouseOver() {
    alert("Haa bhai mouse hata le");
  }

  function handleInputChange(e){
    console.log("value till now:", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form submit kr du kya??")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>


    {/* <p onMouseOver={handleMouseOver}>I am Para</p>
     <button onClick={handleClick}>Click Me</button> */}
     </>
  );
}

export default App
