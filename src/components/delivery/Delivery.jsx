import React from 'react';
import AddressField from './AddressField';

class Delivery extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AddressField
        label= {'Full Name'}
        htmlFor= {'name'}
        type= {'text'}
        name= {'name'}
        value= {'UX TEST'}
        placeholder= {'Delivery Name'}
        required= {true}
        tabIndex= {42}
      />
    )
  }
}

export default Delivery;
