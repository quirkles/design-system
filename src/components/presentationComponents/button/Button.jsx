import React from 'react';
import propTypes from 'prop-types';

const Button = ({
  buttonText = 'I am a button',
  isDisabled = false,
} = {}) => {
  return (
    <button
      disabled={isDisabled}
    >{buttonText}</button>
  );
};

Button.propTypes = {
  buttonText: propTypes.string,
  isDisabled: propTypes.bool,
};

export default Button;
