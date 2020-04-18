import React from 'react'

import Card from './Card.jsx'

export default (props) => {
  return (
    <div className='app-container'>
      <Card {...props}/>
    </div>
  );
}
