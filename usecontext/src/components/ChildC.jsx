import React, {useContext} from 'react'
import {ThemeContext,UserContext} from '../App'


const ChildC = () => {
    const user = useContext(UserContext);     //useContext API ka use krke app.jsx ke data ko direct fetch kr liya without going in CildA and ChildB
    const {theme,setTheme} = useContext(ThemeContext);
    function toggleTheme(){
        if(theme == 'light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (
    <div>
    <button onClick={toggleTheme}>change Theme</button>
    data: {user.name}
    </div>
  )
}

export default ChildC
