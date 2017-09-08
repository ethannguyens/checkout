import React from 'react'
import PropTypes from 'prop-types';

function textIt(value) {
  return value ? `${value} ,` : "";
}

const PudoSavedAddressText = ({addressee, nameNumber, line1, line2, line3, line4, postcode, countryName}) => {
  return (
    <div className="PudoSavedAddressText">
      <span className="PudoSavedAddressText-name">{addressee}</span>
      <span className="PudoSavedAddressText-addressee">
        {textIt(nameNumber)}
        {textIt(line1)}
        {textIt(line2)}
        {textIt(line3)}
        {textIt(line4)}
        {textIt(postCode)}
        {countryName}
      </span>
    </div>

  )
};

PudoSavedAddressText.propTypes = {
  addressId: PropTypes.string.isRequired,
  addressee: PropTypes.string,
  nameNumber: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  postCode: PropTypes.string,
  countryName: PropTypes.string
};

export default PudoSavedAddressText;
