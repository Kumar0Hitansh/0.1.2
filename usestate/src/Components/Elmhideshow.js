import React,{useState} from 'react'

function Elmhideshow() {


let [elem,hide]=useState(true)



  return (
    <div>
    <h1>hide or show element in react by useState</h1>
    <div><h5>
    {
        elem?'hide or show element in react by useState':null
    }
    </h5></div>
    <button onClick={()=>hide(true)}>show</button> <button onClick={()=>hide(false)}>hide</button>  <button onClick={()=>hide(!elem)}>toggle</button>

    </div>
  )
}

export default Elmhideshow