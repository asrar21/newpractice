import React, { Component } from 'react'

import Example from './components/example'
import Sec4 from './components/sec4'
import Sec3 from './components/sec3'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
   
      flag:false
    }
    
  }
 
 
  render() {
  
    let routes = (
      <Switch>
        <Route path="/a" component={Example} />
        <Route path="/" exact component={Sec3} />
        <Redirect to="/" />
      </Switch>
    );
    
    
    return (
      <div  className="App">
   
      {routes}
       

     
    </div>
     

    
    )
  }
  
}
// const mapStateToProps=state=>({
//   products:state.products
// });
// const mapActionToProps={}

export default App;