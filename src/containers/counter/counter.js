import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from './countercontrol';
import CounterOutput from './counteroutput';
import * as actions from '../../reducers/actions'
import {increment }from '../../reducers/actions'
import {decrement }from '../../reducers/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
                <button onClick={this.props.result}>storeREsult</button>
                <ul>
                    
                       
                       
                           {this.props.storeresult.map(result=>(
                               <li>{result}</li>
                           ))}

                                        
                    
                   
                </ul>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        ctr:state.count,
        storeresult:state.results
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement(10)),
        result:()=>dispatch({type:actions.RESULT})
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Counter);