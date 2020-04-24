import React from 'react';
import propTypes from 'prop-types';

import {SIZES} from '../../../styles/consts';
import {padding} from '../../../styles/attributes';

const {SM, MD} = SIZES;

const buttonStyles = {
  WebkitAppearance: 'none',
  padding: padding(SM, MD),
};

const Button = ({
  buttonText = 'I am a button',
  isDisabled = false,
} = {}) => {
  return (
    <button
      style={buttonStyles}
      disabled={isDisabled}
    >{buttonText}</button>
  );
};

Button.propTypes = {
  buttonText: propTypes.string,
  isDisabled: propTypes.bool,
};

export default Button;
