import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from '../components/Wrapper'
import RichText from '../components/RichText'

const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <Helmet
      title="About | Jesse McLean"
      meta={[{ property: 'og:title', content: 'About | Jesse McLean' }]}
    />
    <Wrapper>
      <RichText maxWidth={0}>
        <p>
          Hi, I’m Jesse McLean, a designer, learning entrepreneur, and advocate
          of failing forward.
        </p>
        <p>
          I got my start in design in 2015 while acquiring a degree in sociology
          and art history. A year later, unable to keep up with work alone, I
          co-founded{' '}
          <a href="https://fieldmedialab.com" target="_blank">
            Field Media Lab
          </a>, a digital product studio creating modern, reliable and refined
          software for startups and companies. I've had the chance to work with
          companies in finance, retail, technology, architecture, and a number
          of other sectors. Meeting new people is one of my favourite things
          about studio work.
        </p>
        <p>
          I'm also a co-founder of{' '}
          <a href="https://play4them.com" target="_blank">
            Play4Them
          </a>—a charitable giving platform that has helped raise over $100,000
          for local causes.
        </p>
        <p>
          One of life’s greatest gifts is the opportunity to build simple things
          with care and quality. If you enjoy the outdoors, motorcycles, or fine
          art (yes), let's chat a while.
        </p>
        <p>Living and working in Calgary.</p>
      </RichText>
    </Wrapper>
  </div>
)

export default About
