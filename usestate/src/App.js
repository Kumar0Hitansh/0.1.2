import React from 'react';

import './App.css';

import Hookusestate from './Components/Hookusestate';
import Props from './Components/Props';
import Onchangeevent from './Components/Onchangeevent';
import Elmhideshow from './Components/Elmhideshow';
import Form from './Components/Form';
import Validation from './Components/Validation';
import Basicformval from './Components/Basicformval';
import Passfunasprop from './Components/Passfunasprop';


function App() {


let propfunction =()=>{
  alert('this function called via props function');
}


  return (
    <div className="App">

    <Hookusestate/>
    <hr />
    <Props name={'hitansh'} email={'hitansh@gmail.com'}/>
    <hr />
   <Onchangeevent/>
   <hr />
   <Elmhideshow/>
   <hr />
   <Form/>
   <hr />
   <Validation/>
   <hr />
   <Basicformval/>
   <hr />
   <Passfunasprop passfunctionasprop={propfunction}/>
   <hr />

   
    </div>
  );
}

export default App;
