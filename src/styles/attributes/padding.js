import {basePaddingSize, MULTIPLIERS, sizeUnit} from '../consts';

export const padding = (...args) => args
    .map((size) => `${basePaddingSize*MULTIPLIERS[size]}${sizeUnit}`)
    .join(' ');
