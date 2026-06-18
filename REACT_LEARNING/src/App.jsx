import axios from 'axios'
import React from 'react'

const App = () => {
   
  const getData=async()=>{
    const response= await axios.get("https://picsum.photos/v2/list")
    console.log(response)
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded'> get data</button>
      <div className='mt-6'></div>
    </div>
  )
}

export default App
