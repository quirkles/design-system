import React from 'react'

import responsify from './higherOrderComponents/responsify'
import controls from './higherOrderComponents/controls'

import Card from './Card'

const pipe = (...fns) => val => fns.reduce((curr, fn) => fn(curr), val)

const withResponsive = responsify()
const withControls = controls()

const enhance = pipe(withControls, withResponsive)

const EnhancedCard = enhance(Card)

export default () =>
  <div id='demo-container'>
    <EnhancedCard/>
  </div>

