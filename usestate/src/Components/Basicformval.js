import React,{useState} from 'react'

function Basicformval() {

    let [id,getuserid]=useState(0);
    let [pass,getuserpass]=useState(0);

    let [error,geterror]=useState(true);

    let [sub,submit]=useState(true);

    let submitcheck=()=>{

        if(id===0 & pass===0){
            return submitcheck(false)
        }
        else if(id<=9 & pass <= 9){
            return submitcheck(false)
        }
        else{
            return submitcheck(true)
        }

    }

    


  return (
    <div>

    <h1>Basic form validation </h1>

    <form action="" onSubmit={(e)=>e.preventDefault()}>

    <input type="text" placeholder='Enter ID' onChange={(e)=>getuserid(e.target.value.length)}/><br />

    <input type="password" placeholder='Enter Pass' onChange={(e)=>getuserpass(e.target.value.length)} /><br />

    <button type='submit'>Log-In/Validate</button>

    </form>

    <div>
    { id===0? <span>null id</span> :id<=9? <span style={{border:'2px solid red',background:'red' }}>invalid id</span>: <span  style={{border:'2px solid green' ,background:'green'}}>valid id</span> }
    <span>...........</span>
    { pass===0? <span>null Pass</span> :pass<=9? <span style={{border:'2px solid red',background:'red' }}>invalid pass </span>: <span  style={{border:'2px solid green' ,background:'green'}}>valid Password</span> }
    </div>


    </div>
  )
}

export default Basicformval