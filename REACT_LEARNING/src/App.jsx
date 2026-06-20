import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data,setData]=useState([])
   
  const getData=async()=>{
    const response= await axios.get("https://picsum.photos/v2/list")
   setData(response.data)

   console.log(data)
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded'> get data</button>
      <div className=' p-5 mt-5 bg-amber-300'>
        {data.map(function(elem,idx){
           
           return   <div key={idx} className= ' bg-amber-950 text-white flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
              <img className='h-40' src={elem.download_url} alt="" />
              <h1 >{elem.author}</h1>
            </div>
        })}
      </div>
    </div>
  )
}

export default App
