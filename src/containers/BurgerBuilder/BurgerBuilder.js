import React, { Component } from 'react'

import Aux from '../../components/hoc/Aux'


import Burger from '../../components/Burger/Bureger'



class BurgerBuilder extends Component {
  constructor() {
    super()
    this.state = {
      ingredients:{
        salad:0,
        cheese:0,
        meat:0
      }
      
     
    }
    
  }
 

 
  render() {
   
    
    
    
    
    return (
     <Aux>

        <Burger ingredients={this.state.ingredients}/>
         <div> burger controller</div>
     </Aux>
     

    
    )
  }

}

export default BurgerBuilder;