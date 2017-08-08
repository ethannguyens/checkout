import React from 'react'
import PropTypes from 'prop-types';
import AddressFieldInput from './AddressFieldInput';
import AddressFieldLabel from './AddressFieldLabel';

const AddressField = ({label, htmlFor, type, name, value, placeholder, required, tabIndex}) => {

  return (
    <li className="address-field">
      <AddressFieldLabel
        label={label}
        htmlFor={htmlFor}
        required={required}
      />
      <AddressFieldInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        tabIndex={tabIndex}
      />
    </li>
  );
};

AddressField.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number
};

export default AddressField;