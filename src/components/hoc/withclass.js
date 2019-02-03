import React from 'react';
import '../App.css'
const Withclass=(props)=>(
<div  className={props.className}> 
    {props.children}
</div>

);