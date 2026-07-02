import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step:1->Create Conetxt
const UserContext = createContext();
//Step:2->wrap all the child inside a provider
//Step:3-> Pass Value
//Step:4->

const ThemeContext = createContext();

function App(){
  const [user, setUser] = useState({name:"Mohit Yadav"});      //Props Drilling-> data will go parent to child to subchild
  const [theme,setTheme] = useState('Light');
  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor: theme=='light'?"beige": "black"}}>
<ChildA/>
</div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
export {ThemeContext}
