
import React, { Component } from 'react';

import { DefaultButton,PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import {  DetailsList , CheckboxVisibility,  } from 'office-ui-fabric-react/lib/DetailsList';

import { initializeIcons } from '@uifabric/icons';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ComboBox } from 'office-ui-fabric-react';



export default  class Folder extends Component{
  
  constructor() {
    super();

    this.state = {
      items: [
       ["Server:",<ComboBox value="Select value"/>,["Apply to all",<Checkbox/>],["From:",<input type="date"/>,"To",<input type="date"/>]]
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


       ],
       items4:[
        {Server:"mail2010",FromDate:'26-jun-2018 00.00.00',ToDate:'27-jun-2018 27.59.59',Number_of_days:'1',CompletedON:"28-jun-2018 2.23Am"},
        {Server:"mail2010",FromDate:'26-jun-2018 00.00.00',ToDate:'27-jun-2018 27.59.59',Number_of_days:'1',CompletedON:"28-jun-2018 2.23Am"},
        {Server:"mail2010",FromDate:'26-jun-2018 00.00.00',ToDate:'27-jun-2018 27.59.59',Number_of_days:'1',CompletedON:"28-jun-2018 2.23Am"},
        {Server:"mail2010",FromDate:'26-jun-2018 00.00.00',ToDate:'27-jun-2018 27.59.59',Number_of_days:'1',CompletedON:"28-jun-2018 2.23Am"},
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
    const { items,items3,items4} = this.state;

    return (
      <div>
          <h1> <Icon iconName="MAilSolid"  />  Archival Store</h1>
         <h>FormDate and ToDate will automatically update as per syncing</h>
        <DetailsList 
          
          items={items}
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          
         
        />
        
        <PrimaryButton>Save</PrimaryButton>
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
        <DefaultButton>Refresh</DefaultButton>
   
        
        <h>Folder Sync History</h>
        <ComboBox value="Default"/>
                <DetailsList 
          
          items={items4}
          
        
          
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          groupProps={{
            showEmptyGroups: true
          }}
          checkboxVisibility={CheckboxVisibility.hidden}
          isHeaderVisible={false}
         
        />
    
   
        
      
       
      </div>
    );
  }
}
 
 
