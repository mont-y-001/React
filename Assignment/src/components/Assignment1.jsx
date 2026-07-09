import { useState } from "react";

export  function Assignment1(){
    const [input, setInput] = useState();

    let expensiveValue = 1;
    for(let i = 1;i<=input;i++){
        expensiveValue *= i; 
    }
    return(
        <div>
            <input type="number" value={input} 
            onChange={(e)=> setInput(e.target.value)} />
            <p>Calculated Value : {expensiveValue}</p>
        </div>
    )
}