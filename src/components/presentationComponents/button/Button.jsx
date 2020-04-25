import React from 'react';
import propTypes from 'prop-types';

import {StylesContext} from '../../higherOrderComponents/styles';
import {memoize, getMiddle, getNextEl} from '../../../helpers/fns';

const getButtonSize = memoize((size, sizeList) => {
  const [middleSize] = getMiddle(sizeList);
  if (size) {
    if (!sizeList.includes(size)) {
      console.warn(`size ${size} not in sizelist ${sizeList}, falling back to ${middleSize}`);
    } else {
      return size;
    }
  }
  return middleSize;
});

const getButtonStyles = memoize((buttonSize, styleConfig) => {
  const {SIZE_LIST, BASE_PADDING_SIZE, SIZE_MULTIPLIERS, SIZE_UNIT} = styleConfig;
  const nextSizeUp = getNextEl(buttonSize, SIZE_LIST);
  const padding = [buttonSize, nextSizeUp]
      .map((size) => `${BASE_PADDING_SIZE*SIZE_MULTIPLIERS[size]}${SIZE_UNIT}`)
      .join(' ');
  return {
    WebkitAppearance: 'none',
    padding,
  };
});

const Button = ({
  buttonText = 'I am a button',
  isDisabled = false,
  size = '',
} = {}) =>
  <StylesContext.Consumer>
    { (styleConfig) => {
      const buttonSize = getButtonSize(size, styleConfig.SIZE_LIST);
      return (
        <button
          style={getButtonStyles(buttonSize, styleConfig)}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      );
    }}
  </StylesContext.Consumer>;

Button.propTypes = {
  buttonText: propTypes.string,
  isDisabled: propTypes.bool,
  size: propTypes.string,
};

export default Button;
