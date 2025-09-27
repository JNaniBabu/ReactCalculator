import './index.css'
import Input from './input'
import Container from './container'
import { useState } from 'react'
function Calcu() {
    let[result,setResult]=useState("")
    let[errorMsg,setErroMsg]=useState(false)
    let[track,setTrack]=useState('')
    
    let resultData=(newItem)=>
    {
        setResult((p)=>p+newItem) 
        setErroMsg(false)    
          
    }
    let validationResult=()=>{
          try {
            let final=eval(result).toString()
            setResult(final)
          } catch (error) {
             setErroMsg(true)
          }
          
          
    }
    let handleClear=()=>{
        setResult('')
        setErroMsg(false)

    }

    let modifyHandler=()=>{
         setErroMsg(false)
          setResult((p)=>p.slice(0,-1))
    }
    return(
        <div className="parent">
             <div className="inputBlock">
                 <Input result={result}></Input>
                 {errorMsg && <h4 className='invalid'>Invalid Input</h4>}
                 <Container resultData={resultData} validationResult={validationResult} handleClear={handleClear} modifyHandler={modifyHandler}></Container>
             </div>
        </div>
    )
    
}

export default Calcu