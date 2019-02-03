import React from 'react';
import './Burger.css';
import Burgeringredient from './Burgeringredient/Burgeringredient'
const Burger=(props)=>{
    //object to array transformation
    let transingredient=Object.keys(props.ingredients).map(ing=>{
        return [...Array(props.ingredients[ing])].map((_,i)=>{
            return <Burgeringredient key={ing+1} type={ing}/>
        })

    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
if(transingredient===0){
    transingredient=alert('please add some ingredients');
}
return (
    <div className="Burger">
    <Burgeringredient type="BreadTop"/>
    
    {transingredient}

    <Burgeringredient type="breadbottom"/>
   
    </div>
);
};
export default Burger;