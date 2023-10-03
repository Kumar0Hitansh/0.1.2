import React from 'react'

function Passfunasprop(props) {
  return (
    <div>
        <h1>Passing function as prop</h1>

        <button onClick={()=>props.passfunctionasprop()}>calling function as prop from parent component</button>
    </div>
  )
}

export default Passfunasprop