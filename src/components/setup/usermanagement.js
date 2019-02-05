
import React, { Component } from 'react';

import { DefaultButton,PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import {  DetailsList , CheckboxVisibility,  } from 'office-ui-fabric-react/lib/DetailsList';

import { initializeIcons } from '@uifabric/icons';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ComboBox } from 'office-ui-fabric-react';



export default  class User extends Component{
  
  constructor() {
    super();

    this.state = {
      items: [
       {Edit:<Icon iconName="Edit" />,User_NAME:'aaronm',Display_NAME:'Aaron Marinucci',Mail_box:'aaronm@sonasoft.com',},
       {Edit:<Icon iconName="Edit" />,User_NAME:'aaronm',Display_NAME:'Aaron Marinucci',Mail_box:'aaronm@sonasoft.com',},
       {Edit:<Icon iconName="Edit" />,User_NAME:'aaronm',Display_NAME:'Aaron Marinucci',Mail_box:'aaronm@sonasoft.com',},
       {Edit:<Icon iconName="Edit" />,User_NAME:'aaronm',Display_NAME:'Aaron Marinucci',Mail_box:'aaronm@sonasoft.com',},
    
    ],
     
      showItemIndexInView: false,
      isCompactMode: false,

     main:true,
     amain:false,

      
     
     
     items1: [
        
       {key:"Authenthication type:" ,name:[<Checkbox label="AD"/>,<Checkbox label="Local"/>]},
       
       ],
       groups1:[
        { key: 'groupred0', name: 'user management setting', startIndex: 0, count: 3 },
       ],
       items2:[
        ["User Type :",<TextField/>],
        ["User Name :",<TextField/>,]
        ["Display Name :",<TextField/>],
        ["Email Address :",<TextField/>],
        ["Role :",<ComboBox value="EAS GENERAL USER"/>],


       ],
       

       
     
    };

   
    
  }
  change=()=>{
      let pflag=this.state.arc;
      this.setState({
          main:!pflag,
          amain:true
      })
  }
  
 

   render() {
    initializeIcons();
    const { items,items1,groups1,items2,groups2} = this.state;

    return (
      <div>
          <h1> <Icon iconName="MAilSolid"  />  Archival Store</h1>
         <label>user name:</label> <TextField/> <PrimaryButton>Search</PrimaryButton>
        <DetailsList 
          
          items={items}
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          
         
        />
        
        <PrimaryButton onClick={this.change}>Add</PrimaryButton>
        <DefaultButton>Enable</DefaultButton>
        <DefaultButton>Disable</DefaultButton>
        <DefaultButton>Delete</DefaultButton>
        
        <DetailsList 
          
          items={items1}
          groups={groups1}
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          isHeaderVisible={false}
         
        />
        <PrimaryButton>Save</PrimaryButton>
        <DefaultButton>Cancel</DefaultButton>
        {this.state.amain===true? <div>
        <h1> Add user</h1>
        <DetailsList 
          
          items={items2}
          groups={groups2}
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          isHeaderVisible={false}
         
        />
        
        <PrimaryButton>Add</PrimaryButton>
        <DefaultButton>cancel</DefaultButton>
       

        

        </div>:null
        }
        
       
      </div>
    );
  }
}
 
 
