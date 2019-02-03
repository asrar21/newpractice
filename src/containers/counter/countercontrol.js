import React from 'react';

// import './CounterControl.css';

const counterControl = (props) => (
    <div  onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;