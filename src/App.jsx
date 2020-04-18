import React, { useState } from 'react'

import {breakpointChangeStream, SMALL} from './breakpoints'

import Card from './Card.jsx'

export default (props) => {
  const [ screenSize, setScreenSize ] = useState(SMALL)
  breakpointChangeStream.subscribe(setScreenSize)
  return (
    <div className='app-container'>
      <Card {...props} screenSize={screenSize}/>
    </div>
  );
}
