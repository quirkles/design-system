const SIZE_LIST = [
  'XSM',
  'SM',
  'MD',
  'LRG',
  'XLRG',
];

const SIZE_UNIT = 'rem';
const BASE_PADDING_SIZE = 1;

export const getSizeMultipliers = (
    sizeList,
    scaleBase = 4,
) => Object.values(sizeList).reduce((acc, size, i, arr) => {
  const n = Math.ceil(i - (arr.length/2));
  acc[size] = Math.sqrt(Math.pow(scaleBase, n));
  return acc;
}, {});

export const defaultConsts = {
  SIZE_UNIT,
  BASE_PADDING_SIZE,
  SIZE_LIST,
};
