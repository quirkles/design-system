import {keyMirror} from '../helpers/fns';

export const sizeUnit = 'rem';
export const basePaddingSize = 1;

export const SIZES = keyMirror({
  XSM: null,
  SM: null,
  MD: null,
  LRG: null,
  XLRG: null,
});

const {XSM, SM, MD, LRG, XLRG} = SIZES;

export const MULTIPLIERS = {
  [XSM]: 0.25,
  [SM]: 0.5,
  [MD]: 1,
  [LRG]: 2,
  [XLRG]: 2,
};
