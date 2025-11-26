import React,{useState} from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data)
  console.log(data)
}
  return (
    <div className='p-10'>
      <button onClick={getData} className="bg-teal-600 text-white font-semibold text-2xl px-6 py-4 rounded active:scale-90">Add Data</button>
      <div className="p-5 bg-gray-950">
        {data.map(function(e,idx){
          return <div key={idx} className='bg-gray-50 text-black flex  items-center justify-between px-8 py-10'>
            <img className='h-40' src={e.download_url} alt="" />
            <h1>{e.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
