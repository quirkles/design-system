import {getSizeMultipliers} from './consts';

export const getConfigFromConsts = (consts) => {
  const {SIZE_LIST} = consts;
  const SIZE_MULTIPLIERS = getSizeMultipliers(SIZE_LIST);
  return {
    ...consts,
    SIZE_MULTIPLIERS,
  };
};
