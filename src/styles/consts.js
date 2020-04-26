const SIZE_LIST = [
  'XSM',
  'SM',
  'MD',
  'LRG',
  'XLRG',
];

const SIZE_UNIT = 'rem';
const BASE_PADDING_SIZE = 1;
const BASE_FONT_STACK = '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;';
const FONT_STACK = '';

const COLOR_PALETTE ={
  primary: '#1779ba',
  secondary: '#767676',
  success: '#3adb76',
  warning: '#ffae00',
  alert: '#cc4b37',
};

export const getSizeMultipliers = (
    sizeList,
    scaleBase = 4,
    // use phi instead ? middle = 1 next up = phi, next phi ^2?
) => Object.values(sizeList).reduce((acc, size, i, arr) => {
  const n = Math.ceil(i - (arr.length/2));
  acc[size] = Math.sqrt(Math.pow(scaleBase, n));
  return acc;
}, {});

export const defaultConsts = {
  SIZE_UNIT,
  BASE_PADDING_SIZE,
  SIZE_LIST,
  BASE_FONT_STACK,
  FONT_STACK,
  COLOR_PALETTE,
};
