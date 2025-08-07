import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => props.setName(e.target.value)}/>
      <p>state variable ke inside value {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
