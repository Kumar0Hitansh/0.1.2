import React from 'react'

function Props(props) {
  return (

    <>
    <div>
    <h1>Performing Props </h1>
    <div style={{border:'2px solid black', width:'250px',margin:'auto' }}>
        <h4>Name : {props.name}</h4>
        <h4>Email : {props.email}</h4>
    </div>
    </div>
    <div><h5>we use props to share data from parent to child components </h5></div>
    </>
  )
}

export default Props