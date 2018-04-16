import React from 'react'
import { maxWidth } from 'styled-system'
import { Box } from 'rebass'

const Comp = Box.extend`
  ${maxWidth};
`

const Wrapper = props => (
  <Comp is={props.is} my={props.my} px={[3, null, 4]}>
    <Comp maxWidth={props.maxWidth} mx="auto">
      {props.children}
    </Comp>
  </Comp>
)

export default Wrapper

Wrapper.defaultProps = {
  is: 'section',
  maxWidth: 1,
  my: 4,
}
