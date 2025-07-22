import React,{useState}  from 'react'

const Calculator = () => {

    const [result,setResult]= useState(0)
    const[n1,setN1]= useState()
    const[n2,setN2]= useState()

    //functions
    function addition(){
        setResult(Number(n1)+Number(n2))
    }
    function subtract(){
        setResult(Number(n1)-Number(n2))
    }
    function division(){
        setResult(Number(n1)/Number(n2))
        if(n2==0){
          setResult("not divide by Zero")
        }else{
     setResult(Number(n1)/Number(n2))
        }
    }

    console.log(n1,'n1')
  return (
    <div>
      <input type="number" onChange={(e)=>setN1(e.target.value)}/>
      <input type="number" onChange={(e)=>setN2(e.target.value)}/>
      
       <div>{result}</div>
      <button onClick={addition}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={division}>/</button>
       
       
     
    </div>
  )
}

export default Calculator
