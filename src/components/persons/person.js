import React from 'react';

import ProductItem from '../home';

const  Persons = (props) => props.persons.map( ( person, index ) => {
        return <ProductItem
          click={() => props.clicked( index )}
          name={person.name}
          id={person.id}
          key={person.id}
          changed={( event ) => props.changed( event, person.id )} />
      } );

export default Persons;