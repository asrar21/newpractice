import React, { Component } from 'react'

import Example from './components/example'
import User from './components/setup/usermanagement'
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
        <Route path="/" exact component={User} />
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