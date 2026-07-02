import { useState } from 'react';

function App() {
 
  return (
    <div>
      <HeaderwithButton/>
      {/* <button onClick={updateTitle}>Update the title</button> */}
     <Header title={title}/>
     <Header title="Mohit Yadav"/>
    </div>
  )
}

function HeaderwithButton(){
  const [title,setTitle] = useState("my name is mohit yadav");

  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
