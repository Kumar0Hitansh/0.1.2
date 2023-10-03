import React,{useState} from 'react'

function Validation() {

    let[login , loginfo]=useState(false);

  return (
    <div>

    <h1>validation using ternary operator and use State </h1>

    {login?<h2>logged in ...  welcome user</h2>: <h2>logged out ... guest mode</h2>}

    <button onClick={()=>loginfo(true)}>login</button><button onClick={()=>loginfo(false)}>logout</button>

    </div>

  )
}

export default Validation