import React, {useState} from 'react';

import {breakpointChangeStream, SMALL} from './breakpoints';

export default () => (Component) => (props) => {
  const [screenSize, setScreenSize] = useState(SMALL);
  breakpointChangeStream.subscribe(setScreenSize);
  return (
    <Component {...props} screenSize={screenSize} />
  );
};
