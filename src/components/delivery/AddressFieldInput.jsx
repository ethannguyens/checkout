import React from 'react'
import PropTypes from 'prop-types';

const AddresFieldInput = ({type, name, value, placeholder, required, tabIndex}) => {
  return (
    <div className="address-field__input">
      <input type={type}
             name={name}
             value={value}
             placeholder={placeholder}
             tabindex={tabIndex}
      />
    </div>
  )
};

AddresFieldInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.integer

};

export default AddresFieldInput;