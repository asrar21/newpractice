
import React, { Component } from 'react';

import { DefaultButton,PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import {  DetailsList , CheckboxVisibility,  } from 'office-ui-fabric-react/lib/DetailsList';

import { initializeIcons } from '@uifabric/icons';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ComboBox } from 'office-ui-fabric-react';



export default  class Domain extends Component{
  
  constructor() {
    super();

    this.state = {
      items: [
       {Edit:<Icon iconName="Edit" />,OldDOMAINNAME:'sonasoft.com',Description:'SONASOFT',},
       {Edit:<Icon iconName="Edit" />,OldDOMAINNAME:'sonasoft.com',Description:'SONASOFT',},
    ],
     
      showItemIndexInView: false,
      isCompactMode: false,

     main:true,
     amain:false,

      
     
     
     
       items2:[
        ["Old Domain Name :",<TextField/>]
        ["Old Domain Desc :",<TextField/>]
       

       ],
       items3:[
        ["Available Mailboxes","Selected MailBoxes"]
        [<TextField label="Disabled" multiline rows={4} disabled={true} value="" />,[<button value=">"></button>,<button value=">>"></button>,<button value="<<"></button>,<button value="<"></button>],<TextField label="Disabled" multiline rows={4} disabled={true} value="" />]


       ]

       
     
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
    const { items,items2,items3} = this.state;

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
        
        <DefaultButton>Delete</DefaultButton>
        
        
        {this.state.amain===true? <div>
        <h1> Add Domain</h1>
        <DetailsList 
          
          items={items2}
         
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          isHeaderVisible={false}
         
        />
        <h>mail as per archival policy</h>
                <DetailsList 
          
          items={items3}
          
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          isHeaderVisible={false}
         
        />
        
        <PrimaryButton>Save</PrimaryButton>
        <DefaultButton>cancel</DefaultButton>
       

        

        </div>:null
        }
        
       
      </div>
    );
  }
}
 
 
