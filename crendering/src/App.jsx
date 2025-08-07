import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  //Early Operator
  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }
  //Logical Operator
  return(
    <div>                                      
      <h1>Welcome Everyone</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )


//   return(
//     <div>
// {isLoggedIn ? <LoginBtn/> : <LogoutBtn/>}    //using Ternary Operator
//     </div>
//   )

  // if(isLoggedIn){
  //   return(
  //       <LoginBtn/>
  //   )
  
  // }
  // else{
  //   return(
  //     <LogoutBtn/>
  //   )
    
  // }
 
}

export default App
