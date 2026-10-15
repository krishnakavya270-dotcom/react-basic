import React, { useCallback, useMemo, useState } from 'react'
import CounterHeader from './CounterHeader'



// parent component : Counter
// child component : CounterHeader


function Counter() {

    const title = "React Counter App"
    const [count,setcount] = useState(0)
    const [username,setusername] = useState("")

    console.log(count);

    // const doubleCount = ()=>{
    //   const doubleCountValue = count*2
    //  console.log(doubleCountValue);
    //  return doubleCountValue
    
     
    // }
    const doubleCount = useMemo(()=>{
      console.log('doubleCount');
      return count*2
    },[count])

    const cubeOfTheCount = useCallback(()=>{
      console.log('cubeOfTheCount');
      return count**3 
    },[count])
    
  return (
    <div style={{height:"100vh",fontSize:"50px"}} className='d-flex justify-content-center align-items-center flex-column'>
     <CounterHeader titleHeader = {title}/>
     <h1 className='my-5'>{count}</h1>
     {
        count>=0?
        <p className="text-success fs-1">Positive Number</p>
        :
        <p className="text-danger fs-1">Negative Number</p>
     }
     <p >Double The count : {doubleCount}</p>
     <p>Cube of the Count : {cubeOfTheCount()}</p>
     <input onChange={(event)=>setcount(event.target.value)} type="text" placeholder='Input Counter Value here' className="form-control w-25 my-5" />
     <div className="d-flex">
        <button onClick={()=>{setcount(count-1)}} className="btn btn-warning">DECREMENT</button>
        <button onClick={()=>{setcount(0)}} className="btn btn-danger mx-5">RESET</button>
        <button onClick={()=>{setcount(+count+1)}} className="btn btn-success">INCREMENT</button>
     </div>
     <div className="d-flex align-items-center">
      <input onChange={(e)=>setusername(e.target.value)} type="text" placeholder='input your name here' className="form-control my-5 " />
     </div>
    </div>
  )
}

export default Counter