import { useState } from 'react'

function App(){
  return(
  <div>
    <CardWrapper>
     <CardWrapper>
      <div>
hii there
      </div>
    </CardWrapper>
    </CardWrapper>
   
  </div>
  );
}
function CardWrapper({children}){
 return <div style={{border:"2px solid black",padding:"10px"}}>
  {children}
 </div>
}



export default App


// function App(){
//   return(
// <CardWrapper innerComponent={<TextComponent/> }/>
//   )
// }

// function TextComponent(){
//   return <div>
//     hii there
//   </div>
// }

// function CardWrapper({innerComponent}){
// return <div style={{border:"2px solid black", padding:"10px"}}>
// {innerComponent}
// </div>
// }
