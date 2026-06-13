import React, { useState } from 'react'

const App = () => {

  const  [a ,setA]=useState(20)

  const ChangeA=()=>{
    console.log("CHal gya");
    setA(a+10)
  }
   const ChangeB=()=>{
    console.log("CHal gya");
    if(a>0){
      setA(a-10)
    }
  }
  return (
   
    <div>
       
      <h1>Hello H1 {a} </h1>
     
      <button onClick={ChangeA}>Increment</button>
      <button onClick={ChangeB}>decrement</button>
     
    </div>
  )
}

export default App
