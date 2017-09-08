import React from 'react'
import PropTypes from 'prop-types';
import PudoSavedAddressText from './PudoSavedAddressText';

const PudoSavedAddressList = (address, key) => {
  return (
    <li key={key} id={`PudoSavedAddress-${index}`} className="PudoSavedAddress">
      <input type="radio" name="PudoSavedAddress" value={address.addressId} className="PudoSavedAddress-radio">
        <PudoSavedAddressText
          addressee={address.addressee}
          nameNumber={address.nameNumber}
          line1={address.line1}
          line2={address.line2}
          line3={address.line3}
          line4={address.line4}
          postcode={address.postcode}
          countryName={address.countryName}
        />
      </input>
    </li>
  )
};

PudoSavedAddressList.propTypes = {
  address: PropTypes.object.isRequired
};

export default PudoSavedAddressList
