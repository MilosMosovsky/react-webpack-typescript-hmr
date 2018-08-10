import * as React from 'react'
import { hot } from 'react-hot-loader'

import Content from './content'

const Bootloader = () => {
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  )
}

export default hot(module)(Bootloader)
