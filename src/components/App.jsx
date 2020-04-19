import React from 'react'

import { pipe } from '../fns'
import responsify from './higherOrderComponents/responsify'
import controls from './higherOrderComponents/controls'

import Card from './Card'

const withResponsive = responsify()
const withControls = controls()

const enhance = pipe(withControls, withResponsive)

const EnhancedCard = enhance(Card)

export default () =>
  <div id='demo-container'>
    <EnhancedCard/>
  </div>

