
import React, { Component } from 'react';

import { DefaultButton,PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import {  DetailsList , CheckboxVisibility,  } from 'office-ui-fabric-react/lib/DetailsList';

import { initializeIcons } from '@uifabric/icons';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ComboBox } from 'office-ui-fabric-react';



export default  class Content extends Component{
  
  constructor() {
    super();

    this.state = {
      items: [
       {Edit:<Icon iconName="Edit" />,Name:'Personal info',Notification_type:'Donot Type',Notification_Delay_minutes:'-',Enable:<Icon iconName="Accept"/>},
       {Edit:<Icon iconName="Edit" />,Name:'Personal info',Notification_type:'Donot Type',Notification_Delay_minutes:'-',Enable:<Icon iconName="Accept"/>},
       {Edit:<Icon iconName="Edit" />,Name:'Personal info',Notification_type:'Donot Type',Notification_Delay_minutes:'-',Enable:<Icon iconName="Accept"/>},
      ],
     
      showItemIndexInView: false,
      isCompactMode: false,

     main:true,
     amain:false,

      
     
     
     items1: [
        
       {key:"Apply Content Identification Policy To :" ,name:[<Checkbox label="Active store only"/>,<Checkbox label="all Stores"/>]},
       
       ],
       groups1:[
        { key: 'groupred0', name: 'Content identification Policy setting', startIndex: 0, count: 3 },
       ],
       items2:[
        ["Policy Name",<TextField/>],
        ["Policy Description :",<TextField/>],
        ["Enable :",<Checkbox/>],
        ["Notification Option :",<ComboBox/>],
        ["Condition Name :",<ComboBox/>],
        ["Condition Type :",<ComboBox/>],
        ["Condition Value :"],

       ],
       
       items3: [
        {Edit:<Icon iconName="Edit" />,Condition_NAME:'Personal info',Condition_type:'',condition_value:'',},
       ],
       groups3:[
        { key: 'groupred0', name: '', startIndex: 0, count: 3 },
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
    const { items,items1,groups1,items2,groups2,items3,groups3} = this.state;

    return (
      <div>
          <h1> <Icon iconName="MAilSolid"  />  Archival Store</h1>
          {this.state.main===true?
        <DetailsList 
          
          items={items}
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          
         
        />:null
        }
        
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
        <h1> Add new identification policy</h1>
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
        
        <DefaultButton>Add</DefaultButton>
        <DefaultButton>cancel</DefaultButton>
        <DefaultButton>And</DefaultButton>
        <DefaultButton>OR</DefaultButton>
        <DefaultButton>(</DefaultButton>
        <DefaultButton>)</DefaultButton>

        <DetailsList 
          
          items={items3}
          groups={groups3}
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          
         
        />

        </div>:null
        }
        
       
      </div>
    );
  }
}
 
 
