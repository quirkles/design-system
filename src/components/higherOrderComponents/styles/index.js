import React from 'react';

import {getConfigFromConsts, defaultConsts} from '../../../styles';

export const StylesContext = React.createContext();

StylesContext.displayName = 'StyleContext';

export const withStyles = (styleConstOverrides = {}) => (Component) => (props) => {
  const styleConfig = getConfigFromConsts({
    ...styleConstOverrides,
    ...defaultConsts,
  });
  return (
    <StylesContext.Provider value={styleConfig}>
      <Component {...props} />
    </StylesContext.Provider>
  );
};
