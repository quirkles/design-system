export const padding = (...args) => args
    .map((size) => `${basePaddingSize*MULTIPLIERS[size]}${sizeUnit}`)
    .join(' ');
