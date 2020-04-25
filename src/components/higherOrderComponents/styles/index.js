import React from 'React';

import styleDefault from '../../../styles/config';

import {getBreakPointFromScreenSize} from './breakpoints';

export const StylesContext = React.createContext();

export default (stylesOverrides = {}) => (Component) => (props) => {
  const [screenSize, setScreenSize] = useState();
  breakpointChangeStream = getBreakPointFromScreenSize(setScreenSize);
  const styles = {
    ...stylesOverrides,
    ...styleDefault,
  };
  return (
    <StylesContext.Provider>
      <Component {...props} value={{styles, screenSize}} />
    </StylesContext.Provider>
  );
};
