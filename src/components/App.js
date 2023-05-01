
import React, { useState, useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const[inputval,setinputval]=useState(50)
  const[rangeval,setrange]=useState({range_a_val: 0,range_a_max: 0,range_b_val: 50,range_b_max: 50})
  const myval=()=>{
    const max=(rangeval.range_a_max<rangeval.range_b_max)?rangeval.range_b_max:rangeval.range_a_max;
    if(max<=inputval){
      setrange((max===rangeval.range_b_max)?{...rangeval,range_a_max: inputval-rangeval.range_b_max}:{...rangeval,range_b_max: inputval-rangeval.range_a_max})
    }else{
      if(max===rangeval.range_b_max){
        setrange((inputval<rangeval.range_b_val)?{...rangeval,range_b_max: inputval,range_b_val: inputval}:{...rangeval,range_b_max: inputval})
      }else{
        setrange((rangeval.range_a_val>inputval)?{...rangeval,range_a_max:inputval,range_a_val:inputval}:{...rangeval,range_a_max:inputval})
      }  
    }
  }
  useEffect(()=>{myval()},[inputval])
  return(<div  id="max-sum-holder">
    input max sum:-
    <input value={inputval} onChange={(el)=>{
      setinputval(Number(el.target.value))
    }}/>
    <div id="range-a-holder">
      <input type='range' value={rangeval.range_a_val} max={rangeval.range_a_max} onChange={(el)=>{
        setrange({...rangeval,range_a_val: Number(el.target.value),range_b_max: (inputval-Number(el.target.value))})
     }}/>
      <span  id="range-a-value">{rangeval.range_a_val}</span>
    </div>
    <div id="range-b-holder">
      <input type='range' value={rangeval.range_b_val} max={rangeval.range_b_max} onChange={(el)=>{
        setrange({...rangeval,range_b_val: Number(el.target.value),range_a_max: (inputval-Number(el.target.value))})
      }}/>
      <span  id="range-b-value">{rangeval.range_b_val}</span>
    </div>
    <div  id="sum">
      {rangeval.range_a_val+rangeval.range_b_val}
    </div>
    
  </div>)
  
}


export default App;
