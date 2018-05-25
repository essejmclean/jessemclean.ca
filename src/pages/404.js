import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from '../components/Wrapper'
import RichText from '../components/RichText'

const NotFoundPage = ({transition}) => (
  <div style={transition && transition.style}>
    <Helmet
      title="Page not found | Jesse McLean"
      meta={[{ property: 'og:title', content: 'Page not found | Jesse McLean' }]}
    />
    <Wrapper>
      <RichText maxWidth={0}>
        <p>
          Uh oh! That page isn't here 🤷‍♂️
        </p>
      </RichText>
    </Wrapper>
  </div>
)

export default NotFoundPage
