import { useState } from "react"
import React from 'react'

function Form() {

let[name,getname]=useState('...')
let[lastname,getlastname]=useState('...')
let[radio,getradio]=useState('...')


  return (
    <div>
        <h1>getting Form data in react  by use state</h1>

        <form action="" style={{width:'400px',border:'2px solid black',margin:'auto',padding:'20px 0px 20px 0px'}} onSubmit={(e)=>e.preventDefault()}>

        <input type="text" placeholder='Name' name="" onChange={(e)=>getname(e.target.value)}/><br />
        <input type="text" placeholder='Last' name="" onChange={(e)=>getlastname(e.target.value)}/><br />
        <input type="radio" name="gender" value={'Boy'} onChange={(e)=>getradio(e.target.value)}/>Boy
        <input type="radio" name="gender" value={'girl'} onChange={(e)=>getradio(e.target.value)} />Girl

        <input type="submit" onClick={()=>console.log( `${name} - ${lastname} , ${radio}`)} />

        </form>

        <h2>my name is {name} {lastname} and i am a {radio}</h2>
    </div>
  )
}

export default Form