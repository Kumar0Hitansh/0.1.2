import React,{useState} from 'react'

function Onchangeevent() {


let [data, onchangedata]=useState(0)
let getdata =(e)=>{
    onchangedata(e.target.value)
    console.log(e.target.value)
}

let [data2 ,onchangedata2] = useState(0)


  return (
    <div>
        <h1>performing on change event to get input data</h1>

        <span><h2>{data}</h2></span>
        <input type="text" onChange={getdata} /><br></br><span>{'<input type="text" onChange={getdata} />'}</span><br />

        <span><h2>{data2}</h2></span>
        <input type="text" onChange={(val)=>{onchangedata2(val.target.value); console.log(val.target.value)}} /><br></br><span>{'<input type="text" onChange={(val)=>{console.log(val.target.value)}} />'}</span>

       

      
        
    </div>
  )
}

export default Onchangeevent