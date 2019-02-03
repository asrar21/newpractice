import React from 'react';

class ProductItem extends React.Component {

    constructor(){
        super();
        this.clickFN = this.clickFN.bind(this); 
    }
// when delete button is clicked this function runs 
    clickFN(){

        console.log("Here Click");
    }

  render() {


    return (
        <div className="para">
            <p onClick={this.props.click} >product name is {this.props.name} id is {this.props.id}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed}/>
        </div>
    );
  }
}

export default ProductItem;