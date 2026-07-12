import { useRef, useState } from "react";

export function Assignment4(){
    const [count,setCount] = useState(0);
    const x = useRef(0);

    function handleClick(){
        setCount(count+1);       
    }

    x.current = x.current+1;
    return <div>
        <p>This component is rendered {x.current} time</p>
        <button onClick={handleClick}>Force rendered</button>   
    </div>
}

// Button Click

// ↓

// setCount()

// ↓

// React Re-render

// ↓

// Component function dubara chali

// ↓

// numberOfTimesReRendered.current++