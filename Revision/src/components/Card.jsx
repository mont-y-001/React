import React from 'react'
import Card2 from './Card2'

const Card = (props) => {
  return (
    <div>
      <h2 className='text-xl'>This is Card</h2>
    <nav className='bg-emerald-950 flex py-5 px-10 items-center justify-between'>
      <h2 className='text-2xl'>Mohit's Website</h2>
      <div className='flex gap-3 items-center'></div>
      <h4 className='text-xl'>About</h4>
      <h4 className='text-xl'>Contact</h4>
      <h4 className='text-xl'>Services</h4>
    </nav>

    <h1 className='text-white'>usename is {props.a}</h1>\
    <Card2 user = {props.a}/>
    </div>
  )
}

export default Card
