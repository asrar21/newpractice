import React, { Component } from 'react'
import '../App.css'
// import Withclass from './hoc/withclass'
// import Radium from 'radium'
import ProductItem from './home';




class Sec4 extends Component {
  constructor() {
    super()
    this.state = {
      products:[
        {name: "Lux", id: 1},
        {name: "colgate", id: 2},
        {name: "sensodine", id: 3},
       
      ]
      ,
      my:[],
      flag:false
      
    }
    // this.array=this.array.bind(this);
    // this.change=this.change.bind(this);
  }
 toggle=()=>{
     const pflag=this.state.flag;
     this.setState({flag:!pflag})

 }
 toggls=()=>{
    const pflag=this.state.flag;
    this.setState({flag:!pflag})
 }
 delete=(i)=>{
     const products=[...this.state.products];
     products.splice(i,1);
     this.setState({
         products:products
     })

 }
  render() {
   
    const style = {
        backgroundColor:'green',
        color:"white",
        font:'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
          backgroundColor:'red',
          color:'black'
        }
      };
    
    let products=null;
    if(this.state.flags){
        products=(
        <div>
            {this.state.products.map((product,i)=>{
                return <ProductItem
                click={()=>this.delete(i)} 
                name={product.name} 
                key={product.id}/>
            })}
     
      </div>
        );
        style.backgroundColor='red';
        style[':hover']={
          backgroundColor:"white",
          color:'grey'

        }
    }
    let classes=[];
    if(this.state.products.lenght===3){
      classes.push('red');
    }

    return (
      <div>
      {/* {calling function that returns Header Component and in array function sending data of array to Hearder component} */}
       <p className={classes.join(' ')}> products of shops</p>
      <div className="container">
      <button onClick={this.toggle} style={style}>show products using turnery</button>
      <button onClick={this.toggls} style={style}>referring to render method</button>
      {/* {conditional turnery  expression} */}
      {
          this.state.flag === true ?
        <div>
             {/* {Sending products array data using props to productItem component}       */}
         <ProductItem name={this.state.products[0].name} id={this.state.products[0].id} />
         {/* {passing reference of function} */}
         <ProductItem name={this.state.products[1].name} id={this.state.products[1].id} >MOSt popular</ProductItem>
         <ProductItem name={this.state.products[2].name} id={this.state.products[2].id} changed={this.change}> Good tooth paste</ProductItem>
         </div>:null
      }
      <div>
          {products}
      </div>
      
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

export default Sec4;