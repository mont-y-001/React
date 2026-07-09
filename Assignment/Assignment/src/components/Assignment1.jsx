import { useState } from "react";

export  function Assignment1(){
    const [input, setInput] = useState();

    const expensiveValue = 0;
    return(
        <div>
            <input type="number" value={input} 
            onChange={(e)=> setInput(e.target.value)} />
            <p>Calculated Value : {expensiveValue}</p>
        </div>
    )
}