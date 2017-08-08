import React from 'react'
import PropTypes from 'prop-types';

const AddressFieldLabel = ({label, htmlFor, required}) => {
  return (
    <div class="address-field__label">
      <label htmlFor={htmlFor}>
        label
      </label>
    </div>
  )
};

AddressFieldLabel.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool
};

export default AddressFieldLabel;