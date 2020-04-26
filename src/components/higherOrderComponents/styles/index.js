import React from 'react';

import {getConfigFromConsts, defaultConsts, getGlobalCss, getNormaliseCss} from '../../../styles';

export const StylesContext = React.createContext();

StylesContext.displayName = 'StyleContext';

const appendStylesToHead = (styleCss) => {
  const head = document.head;
  const style = document.createElement('style');
  head.appendChild(style);
  style.appendChild(document.createTextNode(styleCss));
};

export const withStyles = (styleConstOverrides = {}) => (Component) => (props) => {
  const mergedStyleConsts = {
    ...styleConstOverrides,
    ...defaultConsts,
  };
  const globalCss = getGlobalCss(mergedStyleConsts);
  const normalizeCss = getNormaliseCss();
  appendStylesToHead(`${normalizeCss}${globalCss}`);
  const styleConfig = getConfigFromConsts(mergedStyleConsts);
  return (
    <StylesContext.Provider value={styleConfig}>
      <Component {...props} />
    </StylesContext.Provider>
  );
};
