import React from 'react'
import PropTypes from 'prop-types';
import PudoSavedAddressList from './PudoSavedAddressList';

const PudoSavedAddresses = (addresses) => {
  console.log(addresses);
  const listAddresses = addresses.map((address, index)=>
    <PudoSavedAddressList key={index} address={address}/>
  );

  return (
    <ul className="PudoSavedAddresses">
      {listAddresses}
    </ul>
  )
};

PudoSavedAddresses.propTypes = {
  addresses: PropTypes.array.isRequired
};

export default PudoSavedAddresses;
