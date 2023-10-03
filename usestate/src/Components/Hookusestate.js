import React,{useState} from 'react'


function Hookusestate() {

        
const [data , updatedata]=useState('STRING')

let Update=()=>{

  if (data==='STRING'){
  updatedata('STRING-UPDATED_USING useState...')
  console.log('updated');
}
else{
  updatedata('STRING')
  console.log('updated again');
}
  
}
    
  return (
    <div>
         <div>
         
         <h2>Performing useState</h2>
     <h1>{data}</h1>
     <button onClick={Update}>Update</button>
     <br />
     <div><h5>we use useState Hook to perform / update the variables in React.js  </h5></div>
    </div>
    </div>
  )
}

export default Hookusestate