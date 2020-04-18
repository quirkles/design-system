import responsify from './higherOrderComponents/responsify'

import Card from './Card'

const withResponsive = responsify()

export default withResponsive(Card)

