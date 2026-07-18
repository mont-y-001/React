import { useMemo, useState } from "react"

export function Assignment3(){
    const [items, setItems] = useState([
        {name:"tomato", price:50},
        {name:"potato", price:60},
        {name:"chilly", price:80},
        {name:"garlic", price:10},
    ]);
    let totalValue = useMemo(()=>{
        return items.reduce((sum,x)=>sum+x.price,0);
    },[items])
    return(
        <div>
<ul>
    {items.map((item,index)=>(
        <li key={index} >{item.name} - Prices - {item.price}</li>
    ))}
</ul>
<p>Total Value - {totalValue}</p>
        </div>
    )
}