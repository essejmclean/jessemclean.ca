import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Text from './Text'

const Button = Text.extend`
  padding: 0;
  line-height: 1;
  background-color: transparent;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;

  @media not all and (hover: none) {
    &:hover {
      color: ${props => rgba(props.theme.colors.text, 1 / 2)};
    }
  }
`

Button.defaultProps = {
  is: 'button',
}

class ScrollToTop extends React.Component {
  constructor() {
    super()

    this.state = {
      intervalId: 0,
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    )
    this.setState({ intervalId: intervalId })
  }

  render() {
    return (
      <Button
        title="Back to top"
        className="scroll"
        onClick={() => {
          this.scrollToTop()
        }}
        children="&#8593;"
      />
    )
  }
}

ScrollToTop.defaultProps = {
  scrollStepInPx: 50,
  delayInMs: 10,
}

export default ScrollToTop
