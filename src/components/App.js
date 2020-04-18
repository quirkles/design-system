import responsify from './higherOrderComponents/responsify'

import Card from './Card.jsx'

const withResponsive = responsify()

export default withResponsive(Card)

