import React,{useState} from 'react'
import './counter.css'
import './App.js'


export default function Counter() {
  const [number,setNumber]=useState(0)
  const [error,setError]= useState("")
  const gotobtn =document.querySelector('#gobtn')
  const handleChange=() => {
    setNumber(number)
  }
  const increment=() => {

    let previousValue = number;
    let currentValue= previousValue+1
    setNumber(number+1)

    if(currentValue>0){
      setError("")
    }
    
    if(currentValue>10){
      gotobtn?.classList.remove("invisible")
    }
    else(
      gotobtn?.classList.add("invisible")
    )
    
  }
  const decrement=() => {
    let previousValue = number;
    // console.log("previousValue",previousValue)
    let currentValue= previousValue-1
    // console.log("currentValue",currentValue)

    if(number!==0){
      setNumber(number-1)
    }

    if(currentValue===0){
      setError("Error : Cannot go below 0")
    }
  
    if(currentValue <10){
      gotobtn?.classList.add("invisible")
    }
  }

  const gotoback=() => {
    setNumber(0)
  }
  return (
    <div className="container my-3"> 
     <h1 className="title">Counter using React</h1>
     <div className="counter-number">
      <h4 onChange={handleChange}>Your Current Count is : {number}</h4>
     </div>
     <p className="error">{error}</p>
     <button className="btn btn-primary " onClick={decrement}>Decrement</button>
     <button className="btn btn-primary mx-2" onClick={increment}>Increment</button>
     <button className= "btn btn-primary mx-2 invisible" id ="gobtn"onClick={gotoback}>Go Back to 0</button>
    </div>
  )
}
