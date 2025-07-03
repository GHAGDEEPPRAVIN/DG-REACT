import { useState } from 'react'
import './App.css'

function App() {
  const [state,setstate] = useState(0)

  const isbutn = state >= 20
  const outbutn = state <= 0

  return ( <div style={{width:"400px",textAlign:"center"}}>
    
    <h1>Counter Application</h1>

    <hr style={{margin:"10px 0px"}} />

        <button disabled={isbutn} onClick={()=>{
          if(state<20)
          {
            setstate(state+1)
          }
          else
          {
            {style={display:"none"}}
          }
          
        }} style={{width:"30px",height:"35px",backgroundColor:"white",color:"black"}} >+</button>

        <span style={{padding:"5px 20px",border:"1px solid black",margin:"0px 10px 0px 10px"}}>{state}</span>
        
        <button disabled={outbutn} onClick={()=>{
          if(state>0)
          {
            setstate(state-1)
          } 
        }} style={{width:"30px",height:"35px",backgroundColor:"white",color:"black"}}>-</button>
        
        <div style={{margin:"10px 0px 0px 0px"}}>

        </div>
        
        <button onClick={()=>{
          if(state>0)
          {
            setstate(0)
          } 
        }} style={{width:"50px",height:"35px",backgroundColor:"white",color:"black"}}>Reset</button>

  </div>
  )
}

export default App
