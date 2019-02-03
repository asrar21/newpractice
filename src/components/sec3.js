import React, { Component } from 'react'



import ProductItem from './home';




class Sec3 extends Component {
  constructor() {
    super()
    this.state = {
      products:[
        {name: "Lux", id: 1},
        {name: "colgate", id: 2},
        {name: "sensodine", id: 3},
       
      ]
      ,
      my:[]
      
    }
    // this.array=this.array.bind(this);
    // this.change=this.change.bind(this);
  }
 click=()=>{
    //  this.setState({
    //      products:[
    //         {name: "dalda", id: 1},
    //         {name: "medicam", id: 2},
    //         {name: "sensodine", id: 3},
           
    //       ]
    //  })
     this.props.history.push('/a')

}
change=(e)=>{
    this.setState({
        products:[
           {name: "dalda", id: 1},
           {name: "medicam", id: 2},
           {name: e.target.value, id: 3},
          
         ]
    })

}
 
  render() {
   
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
    
    
    
    return (
      <div className="App">
      {/* {calling function that returns Header Component and in array function sending data of array to Hearder component} */}
    
      <div className="container">
      <button onClick={this.click} style={style}>click to change product list</button>
        
             {/* {Sending products array data using props to productItem component}       */}
         <ProductItem name={this.state.products[0].name} id={this.state.products[0].id} />
         {/* {passing reference of function} */}
         <ProductItem name={this.state.products[1].name} id={this.state.products[1].id} click={this.click.bind(this,"laz")}>MOSt popular</ProductItem>
         <ProductItem name={this.state.products[2].name} id={this.state.products[2].id} changed={this.change}> Good tooth paste</ProductItem>
       
      </div>
      
     
    </div>
     

    
    )
  }
//   array(){
//    let ice=[
//      {name:"sibra"},
//      {name:"atlantic ocean"},
//      {name:"alaska"}
//    ]
//    let obj = {
//     a:10,
//     b: 20
//   }
//   let data1="karachi"
//    return ice.map(x=><Header data={x.name} data1={data1} data2={obj} />)
//   }
  
}

export default Sec3;