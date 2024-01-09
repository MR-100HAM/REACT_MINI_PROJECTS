import React, { useState } from 'react'

const App = () => {

  let [counter,setCounter] = useState(0)


  const addValue = () =>{
    counter = counter + 1

    //Coditions 
    if(counter <= 10){
      setCounter(counter)
    }else{
      alert("You Can't Increase Value Greater Then 20 !")
    }
  }

  const removeValue = () =>{
    counter = counter - 1
      //Coditions 
    if(counter < 0 ){
       alert("You Can't Decrease Value Less then 0 !")
    }else{
      setCounter(counter)
    }
  }

  // INTERVIEW PURPOSE ONLY !

  // const addValue = () =>{
  //  counter = counter + 1
  //  setCounter((prevCounter) => prevCounter + 1)
  //  setCounter((prevCounter) => prevCounter + 1)
  //  setCounter((prevCounter) => prevCounter + 1)
  // }

  return (
    <div className='h-screen w-screen m-auto justify-center flex  flex-col gap-4 bg-slate-800 text-white items-center'>
      <div className='bg-white text-black w-fit rounded p-4 flex flex-col items-center  justify-center'>
      <h1 className='font-semibold my-5 text-xl'>COUNTER</h1>
      <div className='flex bg-slate-800 p-2 rounded font-semibold text-white items-center gap-4'>
      <h2>COUNTER VALUE: {counter} </h2>
      <button className='bg-white p-1 text-black rounded cursor-pointer' onClick={addValue}>INCREASE</button>
      <button className='bg-white p-1 text-black rounded cursor-pointer' onClick={removeValue}>DECREASE</button>
      </div>
      </div>
    </div>
  )
}

export default App