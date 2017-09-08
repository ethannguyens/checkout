import React from 'react';
import PudoSavedAddresses from './PudoSavedAddresses';
import getPudoSavedAddresses from '../../api/getPudoSavedAddresses';

class Pudo extends React.Component {
  constructor() {
    super();
    this.addresses = getPudoSavedAddresses();
  }

  render() {
    return (
      <div className="pudo">
        <PudoSavedAddresses addresses={this.addresses}/>
      </div>
    )
  }
}

export default Pudo;
